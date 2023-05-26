import { useState } from "react";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TiltedLabel from "@shared/TiltedLabel/TiltedLabel";
import { NextI18NContext } from "@src/src-frontend/customTypes/types";
import {
  ADD_CHALLENGE_TO_TEAM,
  CREATE_TEAM,
  CREATE_USER_TO_TEAM,
} from "@src/api/mutations";
import { client } from "@src/api/apolloClient";
import SelectChallenge from "@shared/SelectChallenge/SelectChallenge";
import { GraphQLError } from "graphql";
import { UserRole } from "@gql/graphql";
import Stepper from "@shared/Stepper/Stepper";
import FormTeam from "@shared/Stepper/FormTeam";
import FormChallenge from "@shared/Stepper/FormChallenge";
import FormInvitation from "@shared/Stepper/FormInvitation";


const FormLaunchChallenge = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [errorTeam, setErrorTeam] = useState<GraphQLError | null>(null);
  const [successTeam, setSuccessTeam] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [file, setFiles] = useState({ preview: "", data: "" });
  
  const [errorChallenge, setErrorChallenge] = useState<GraphQLError | null>(null);
  const [successChallenge, setSuccessChallenge] = useState(false);
  const [teamId, setTeamId] = useState("");
  const [challenge, setChallenge] = useState({ id: "", challengeName: "" });
  const [startsAt, setStartsAt] = useState<Date | null>(null);
  const [endAt, setEndAt] = useState<Date | null>(null);
  const onChangeDate = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartsAt(start);
    setEndAt(end);
  };

  const [errorInvitation, setErrorInvitation] = useState<GraphQLError | null>(null);
  const [successInvitation, setSuccessInvitation] = useState(false);
  const [guestEmail, setGuestEmail] = useState("");

  const userEmail = "user4@gmail.com"; //a recup avec le contexte

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
      setTeamId(team);

      await client.mutate({
        mutation: CREATE_USER_TO_TEAM,
        variables: {
          teamId: team,
          userEmail,
          userRole: UserRole.Admin,
        },
      });
      setSuccessTeam(true);
    } catch (error) {
      setErrorTeam(error as GraphQLError);
    }
  };

  const submitChallenge = async () => {
    setSuccessChallenge(false);
    setErrorChallenge(null);
    try {
      await client.mutate({
        mutation: ADD_CHALLENGE_TO_TEAM,
        variables: {
          teamId,
          challengeId : challenge.id,
          startsAt : startsAt?.toDateString(),
          endAt: endAt?.toDateString(),
        },
      });
      setSuccessChallenge(true);
    } catch (error) {
      setErrorChallenge(error as GraphQLError);
    }
  };

  const submitInvitation = async () => {
    setSuccessInvitation(false); 
    setErrorInvitation(null);
    try {
      await client.mutate({
        mutation: CREATE_USER_TO_TEAM,
        variables: {
          teamId,
          userEmail: guestEmail,
          userRole: UserRole.Player,
          challengeName: challenge.challengeName
        },
      });
      setSuccessInvitation(true);
    } catch (error) {
      setErrorInvitation(error as GraphQLError);
    }

  }

  const renderForm = () => {
    switch(currentStep) {
      case 1 : 
      return (
        <FormTeam /> 
      )
      case 2 : 
      return (
        <FormChallenge /> 
      )
      case 3 : 
      return (
        <FormInvitation /> 
      )
      default: return null
    }
  }
  return (
    <>
      <h1>Lancer un challenge</h1>
      <TiltedLabel>Règles du jeu</TiltedLabel>
      <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep}/>
      {renderForm()}

      {/* <form
        className="w-10/12 mx-auto my-8 flex flex-col"
        onSubmit={async (event) => {
          event.preventDefault();
          await submitNewTeam();
        }}
      >
        <fieldset className="flex flex-col">
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
              {/* Team created successfully! */}
            {/* </div>
          )}
        </fieldset>
      </form>

      <form
        className="w-10/12 mx-auto my-8 flex flex-col"
        onSubmit={async (event) => {
          event.preventDefault();
          await submitChallenge();
        }}
      >
        <fieldset className="flex flex-col">
          <legend> 2 - Je choisi mon challenge</legend>
          <SelectChallenge setChallenge={setChallenge} />

          <label htmlFor="period">Période *</label>
          <DatePicker
            selected={startsAt}
            onChange={onChangeDate}
            startDate={startsAt}
            endDate={endAt}
            minDate={new Date()}
            selectsRange={true}
            monthsShown={2}
            isClearable={true}
            placeholderText="Click to select a date"
            className="input-launch-chall"
          />
          <input type="submit" value="valider" />
          {errorChallenge && <div>{errorChallenge.message}</div>}
          {successChallenge && (
            <div>
              Challenge ajouté !
            </div>
          )}
        </fieldset>
      </form>

      <form
        className="w-10/12 mx-auto my-8 flex flex-col"
        onSubmit={async (event) => {
          event.preventDefault();
          await submitInvitation();
        }}
      >
        <fieldset className="flex flex-col">
          <legend> 3 - J&apos;invite des participants</legend>

          <label htmlFor="period">Email *</label>
          <input
            className="input-launch-chall"
            type="email"
            id="email"
            name="email"
            value={guestEmail}
            placeholder="invite@exemple.com"
            onChange={(e) => setGuestEmail(e.target.value)}
          />
          <input type="submit" value="valider" />
          {errorInvitation && <div>{errorInvitation.message}</div>}
          {successInvitation && (
            <div>
              Invitations envoyées
            </div>
          )}
        </fieldset>
      </form> */} 
    </>
  );
};

export async function getServerSideProps(context: NextI18NContext) {
  const { locale } = context;
  if (!["en", "fr"].includes(locale)) {
    return { notFound: true };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "page",
        "formlaunchchallenge",
      ])),
      locale,
    },
  };
}

export default FormLaunchChallenge;
