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
  setCurrentStep:React.Dispatch<React.SetStateAction<number>>; 
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
  steps: number[];
};

const FormTeam =  (props: FormTeamProps) => {
  const [errorTeam, setErrorTeam] = useState<GraphQLError | null>(null);
  const [teamName, setTeamName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [file, setFile] = useState({ preview: "", data: "" });
  
  const handleImageChange = (e: any) => {
    // e.preventDefault();
    const image = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setFile(image);
  };

  const submitNewTeam = async () => {
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
      <legend className="font-medium text-2xl text-primary pb-5"> Je crée ma Team</legend>
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
      <p className="text-sm italic text-gray-700">formats acceptés : jpg, jpeg, png, gif, bmp, tiff, tif</p>
        <input
          className="input-launch-chall"
          type="file"
          id="imgTeam"
          name="imgTeam"
          accept=".jpg, .jpeg, .png, .gif, .bmp, .tiff, .tif"
          capture="environment"
          onChange={handleImageChange}
        />
      </label>

      {file.preview && <Image src={file.preview} width={300} height={300} alt="Mon équipe" data-testid="img-team"/>}
      
      <div className="flex items-center space-x-3">
        <input
          className="w-6 h-6 my-3 accent-primary"
          type="checkbox"
          id="isPublic"
          name="isPublic"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
        />
        <label htmlFor="isPublic">Groupe ouvert</label>
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