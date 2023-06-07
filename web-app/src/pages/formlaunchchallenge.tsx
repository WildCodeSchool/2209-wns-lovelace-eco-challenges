import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import "react-datepicker/dist/react-datepicker.css";
import TiltedLabel from "@shared/TiltedLabel/TiltedLabel";
import { NextI18NContext } from "@src/src-frontend/customTypes/types";
import Stepper from "@shared/Stepper/Stepper";
import FormTeam from "@shared/Stepper/FormTeam";
import FormChallenge from "@shared/Stepper/FormChallenge";
import FormInvitation from "@shared/Stepper/FormInvitation";
import LaunchChallenge from "@assets/logos/LaunchChallenge";


const FormLaunchChallenge = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [teamId, setTeamId] = useState("");
  const [challenge, setChallenge] = useState({ id: "", challengeName: "" });
  const userEmail = "user4@gmail.com"; //a recup avec le contexte

  const renderForm = () => {
    switch(currentStep) {
      case 1 : 
      return (
        <FormTeam userEmail={userEmail} setTeamId={setTeamId}/> 
      )
      case 2 : 
      return (
        <FormChallenge teamId={teamId} challenge={challenge} setChallenge={setChallenge}/> 
      )
      case 3 : 
      return (
        <FormInvitation teamId={teamId} challengeName={challenge.challengeName}/> 
      )
      default: return null
    }
  }
  return (
    <>
    <div className="flex flex-col items-center my-10 space-y-3">
      <LaunchChallenge width="3em" height="3em"/>
      <h1 className="font-bold text-2xl">Lancer un challenge</h1>
      <TiltedLabel>Règles du jeu</TiltedLabel>
      </ div>
      <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep}/>
      {renderForm()}
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
