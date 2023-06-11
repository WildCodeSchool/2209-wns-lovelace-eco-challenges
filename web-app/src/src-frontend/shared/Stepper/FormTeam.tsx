import Image from "next/image";
import { GraphQLError } from "graphql";
import { UserRole } from '@gql/graphql';
import { client } from '@src/api/apolloClient';
import { CREATE_TEAM, CREATE_USER_TO_TEAM } from '@src/api/mutations';
import React, { useState } from 'react'
import Button from "@shared/Buttons/Button";


type FormTeamProps = {
  setTeamId: (teamId: string) => void;
  userEmail: string;
  currentStep: number; 
  setCurrentStep: (step: number) => void; 
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
  steps: number[];
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
      props.currentStep === props.steps.length
      ? props.setComplete(true)
      : props.setCurrentStep((prev) => prev + 1);
    } catch (error) {
      setErrorTeam(error as GraphQLError);
    }
  };
  
  return (
    <form
    className="mb-5 flex flex-col justify-center"
    onSubmit={async (event) => {
      event.preventDefault();
      await submitNewTeam();
    }}
  >
    <fieldset className="flex flex-col justify-center space-y-3">
      <legend className="font-medium text-2xl text-primary pb-5"> Je créer ma Team</legend>
      <label htmlFor="teamName">Nom de ma Team *
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
      </label>
      <label htmlFor="city">Ville *
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
      </label>
      <label htmlFor="country">Pays *
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
      </label>

      <label htmlFor="imgTeam">Fanion, photo...
        <input
          className="input-launch-chall"
          type="file"
          id="imgTeam"
          name="imgTeam"
          accept="image/*"
          capture="environment"
          onChange={handleImageChange}
        />
      </label>

      {file.preview && <Image src={file.preview} width={300} height={300} alt="Mon équipe" />}
      
      <div className="flex items-center space-x-3">
        <label>Groupe ouvert</label>
        <input
          className=""
          type="checkbox"
          id="isPublic"
          name="isPublic"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
        />
      </div>  
      <div className="py-5 flex justify-end">
        <Button name="Confirm & Go step 2  >>" size="max-w-fit" type="button-primary" />
      </div>
      {errorTeam && <p className="text-error text-center">{errorTeam.message}</p>}
    </fieldset>
  </form>
  )
}

export default FormTeam