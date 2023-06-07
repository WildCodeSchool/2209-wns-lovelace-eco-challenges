import Image from "next/image";
import { GraphQLError } from "graphql";
import { UserRole } from '@gql/graphql';
import { client } from '@src/api/apolloClient';
import { CREATE_TEAM, CREATE_USER_TO_TEAM } from '@src/api/mutations';
import React, { useState } from 'react'


type FormTeamProps = {
  setTeamId: (teamId: string) => void;
  userEmail: string;
};

const FormTeam =  (props: FormTeamProps) => {
  const [errorTeam, setErrorTeam] = useState<GraphQLError | null>(null);
  const [successTeam, setSuccessTeam] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [file, setFiles] = useState({ preview: "", data: "" });
  
  const handleImageChange = (e: any) => {
    // e.preventDefault();
    const image = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setFiles(image);
  };

  const submitNewTeam = async () => {
    setSuccessTeam(false);
    setErrorTeam(null);

    let formData = new FormData(); 
    formData.append("file", file.data); 

    try {
        const imageResponse = await fetch("/uploader/image-upload", {
          method: "POST", 
          body: formData,
        });
        const img = await imageResponse.json();

      const response = await client.mutate({
        mutation: CREATE_TEAM,
        variables: {
          teamName,
          city,
          country,
          isPublic,
          img: img.filename,
        },
      });
      const team = response.data.createTeam.id;
      props.setTeamId(team);

      await client.mutate({
        mutation: CREATE_USER_TO_TEAM,
        variables: {
          teamId: team,
          userEmail: props.userEmail,
          userRole: UserRole.Admin,
        },
      });
      setSuccessTeam(true);
    } catch (error) {
      setErrorTeam(error as GraphQLError);
    }
  };
  
  return (
    <form
    className="w-10/12 mx-auto my-8 flex flex-col justify-center"
    onSubmit={async (event) => {
      event.preventDefault();
      await submitNewTeam();
    }}
  >
    <fieldset className="flex flex-col">
      <legend className="font-medium text-2xl text-primary"> Je créer ma Team</legend>
      <label htmlFor="teamName">Nom de ma Team *</label>
      <input
        className="input-launch-chall"
        required
        type="text"
        id="teamName"
        name="teamName"
        value={teamName}
        onChange={(event) => {
          setTeamName(event.target.value);
        }}
      />
      <label htmlFor="city">Ville *</label>
      <input
        className="input-launch-chall"
        required
        type="text"
        id="city"
        name="city"
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
      />
      <label htmlFor="country">Pays *</label>
      <input
        className="input-launch-chall"
        required
        type="text"
        id="country"
        name="country"
        value={country}
        onChange={(event) => {
          setCountry(event.target.value);
        }}
      />

      <label htmlFor="imgTeam">Fanion, photo...</label>
      <input
        className="input-launch-chall"
        type="file"
        id="imgTeam"
        name="imgTeam"
        accept="image/*"
        capture="environment"
        onChange={handleImageChange}
      />

      {file.preview && <Image src={file.preview} width={300} height={300} alt="Mon équipe" />}

      <label>
        Groupe ouvert
        <input
          className="input-launch-chall"
          type="checkbox"
          id="isPublic"
          name="isPublic"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
        />
      </label>
      <input type="submit" value="valider" />
      {errorTeam && <div>{errorTeam.message}</div>}
      {successTeam && (
        <div>
          Votre Team {`${teamName}`} est créé avec succès.
          Team created successfully!
        </div>
      )}
    </fieldset>
  </form>
  )
}

export default FormTeam