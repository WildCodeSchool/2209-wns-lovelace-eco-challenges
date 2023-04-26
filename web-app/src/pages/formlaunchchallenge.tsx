import { useState } from "react";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


import TiltedLabel from "@shared/TiltedLabel/TiltedLabel"
import { NextI18NContext } from "@src/src-frontend/customTypes/types";
import { useMutation } from "@apollo/client";
import { CreateTeamMutation, CreateTeamMutationVariables } from "@gql/graphql";
import { CREATE_TEAM } from "@src/api/mutations";
import { toast } from "react-toastify";

const FormLaunchChallenge = () => {
  const [teamName, setTeamName] = useState(""); 
  const [city, setCity] = useState(""); 
  const [country, setCountry] = useState(""); 
  const [isPublic, setIsPublic] = useState(false); 
  const [img, setImg] = useState("");  

  const handleImageChange = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    console.log(image)
    setImg(image);
  }

  const [createTeam] = useMutation<
    CreateTeamMutation,
    CreateTeamMutationVariables
  >(CREATE_TEAM, {
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const submitNewTeam = async () => {
    await createTeam({ variables: { 
      teamName,
      city,
      country,
      isPublic,
      img
    }});
    toast.success(`Votre Team ${teamName} est créé avec succès.`);
    console.log("TEEEEAAAAMMMM")
  }

  return (
      <form className="w-10/12 mx-auto my-8 flex flex-col"
      onSubmit={async (event) => {
        event.preventDefault();
        await submitNewTeam(); 
      }}>
        <h1>Lancer un challenge</h1>
        <TiltedLabel>Règles du jeu</TiltedLabel>
        <fieldset 
          className="flex flex-col"
        >
          <legend> 1 - Je créer ma Team</legend>
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
            
            {img && (
              <Image src={img} width={300} height={300} alt="Mon équipe" />
            )}

            <label>Groupe ouvert
              <input 
                className="input-launch-chall"
                type="checkbox" 
                id="isPublic"
                name="isPublic" 
                checked={isPublic}
                onChange={(e)=>setIsPublic(e.target.checked)}
              />
            </label>
            <input type="submit" value="valider"/>
        </fieldset>
      </form>
  )
};

export async function getServerSideProps(context: NextI18NContext) {
  const { locale } = context;
  if (!["en", "fr"].includes(locale)) {
    return { notFound: true };
  }

  // const { data } = await client.query({
  //   query: CHALLENGES,
  //   variables: { pageNumber, itemsByPage },
  //   // ssrMode: true,
  // });

  // const { challenges } = data;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // challenges: challenges ?? [],
      locale,
    },
  };
}

export default FormLaunchChallenge
