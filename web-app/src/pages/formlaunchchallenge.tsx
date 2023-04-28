import { useState } from "react";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TiltedLabel from "@shared/TiltedLabel/TiltedLabel"
import { NextI18NContext } from "@src/src-frontend/customTypes/types";
import { ADD_CHALLENGE_TO_TEAM, CREATE_TEAM, UPDATE_CHALLENGE } from "@src/api/mutations";
import { client } from "@src/api/apolloClient";
import SelectChallenge from "@shared/SelectChallenge/SelectChallenge";
import { GraphQLError } from "graphql";
import { start } from "repl";

const FormLaunchChallenge = () => {
  const [errorTeam, setErrorTeam] = useState<GraphQLError | null>(null);
  const [successTeam, setSuccessTeam] = useState(false);
  const [teamName, setTeamName] = useState(""); 
  const [city, setCity] = useState(""); 
  const [country, setCountry] = useState(""); 
  const [isPublic, setIsPublic] = useState(false); 
  const [img, setImg] = useState("");  

  const [errorChallenge, setErrorChallenge] = useState<GraphQLError | null>(null);
  const [successChallenge, setSuccessChallenge] = useState(false);
  const [teamId, setTeamId] = useState("");
  const [challengeId, setChallengeId] = useState("")
  const [startsAt, setStartsAt] = useState(null);
  const [endAt, setEndAt] = useState(null);
  const onChange = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartsAt(start);
    setEndAt(end);
  };

  const handleImageChange = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    // console.log(image)
    setImg(image);
  }

  const submitNewTeam = async () => {
    setSuccessTeam(false)
    setErrorTeam(null)
    try {
      const response = await client.mutate({
        mutation: CREATE_TEAM,
        variables: { 
        teamName,
        city,
        country,
        isPublic,
        img
        }
      });
      setTeamId(response.data.createTeam.id);
      setSuccessTeam(true);
    } catch (error) {
      setErrorTeam(error as GraphQLError)
    }
    // setTeamName("");
    // setCity("");
    // setCountry("");
    // setIsPublic(false);
    // setImg("");
  }

  const submitChallenge = async () => {
    setSuccessChallenge(false)
    setErrorChallenge(null)
    try {
      await client.mutate({
        mutation: ADD_CHALLENGE_TO_TEAM,
        variables: { 
          teamId,
          challengeId
        }
      });
      await client.mutate({
        mutation: UPDATE_CHALLENGE,
        variables: {
          id: challengeId,
          startsAt,
          endAt
        }
      })
      setSuccessChallenge(true);
    } catch (error) {
      setErrorChallenge(error as GraphQLError)
    }
  }

  return (
    <>
      <h1>Lancer un challenge</h1>
      <TiltedLabel>Règles du jeu</TiltedLabel>

      <form className="w-10/12 mx-auto my-8 flex flex-col"
      onSubmit={async (event) => {
        event.preventDefault();
        await submitNewTeam(); 
      }}>
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
          {errorTeam && (
            <div>
              {errorTeam.message}
            </div>
          )}
          {successTeam && (
            <div>
              Votre Team {`${teamName}`} est créé avec succès.
              {/* Team created successfully! */}
            </div>
          )}
        </fieldset>
      </form>

      <form className="w-10/12 mx-auto my-8 flex flex-col"
      onSubmit={async (event) => {
        event.preventDefault();
        await submitChallenge(); 
      }}>
        <fieldset 
          className="flex flex-col"
        >
          <legend> 2 - Je choisi mon challenge</legend>
          <SelectChallenge
            setChallengeId={setChallengeId}
          />

          <label htmlFor="period">Période *</label>
            <DatePicker
              selected={startsAt}
              onChange={onChange}
              startDate={startsAt}
              endDate={endAt}
              minDate={new Date()}
              selectsRange={true}
              monthsShown={2}
              isClearable={true}
              placeholderText="Click to select a date"
            />
          <input type="submit" value="valider"/>
          {errorChallenge&& (
            <div>
              {errorChallenge.message}
            </div>
          )}
          {successChallenge && (
            <div>
              Challenge {`"challengeName"`} ajouté.
              {/* Team created successfully! */}
            </div>
          )}
        </fieldset>
      </form>

      <form className="w-10/12 mx-auto my-8 flex flex-col"
      onSubmit={async (event) => {
        event.preventDefault();
        await submitInvitation(); 
      }}>
        <fieldset 
          className="flex flex-col"
        >
          <legend> 3 - J'invite des participants</legend>

          <label htmlFor="period">Email *</label>
          <input 
              className="input-launch-chall"
              type="email"
              id="email"
              name="email"
              placeholder="invite@exemple.com"
              onChange={(e)=>setIsPublic(e.target.checked)}
          />
          <input type="submit" value="valider"/>
          {errorChallenge&& (
            <div>
              {errorChallenge.message}
            </div>
          )}
          {successChallenge && (
            <div>
              Challenge {`"challengeName"`} ajouté.
              {/* Team created successfully! */}
            </div>
          )}
        </fieldset>
      </form>
    </>
  )
};

export async function getServerSideProps(context: NextI18NContext) {
  const { locale } = context;
  if (!["en", "fr"].includes(locale)) {
    return { notFound: true };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["page", "formlaunchchallenge"])),
      locale,
    },
  };
}

export default FormLaunchChallenge
