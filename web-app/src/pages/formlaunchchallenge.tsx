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
import GoHome from "@shared/Stepper/GoHome";


const FormLaunchChallenge = () => {
  const [teamId, setTeamId] = useState("");
  const [challenge, setChallenge] = useState({ id: "", challengeName: "" });
  const userEmail = "user4@gmail.com"; //a recup avec le contexte

  const steps=[1, 2, 3, 4]
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const renderForm = () => {
    switch(currentStep) {
      case 1 : 
      return (
        <FormTeam userEmail={userEmail} setTeamId={setTeamId} currentStep={currentStep} setCurrentStep={setCurrentStep} setComplete={setComplete} steps={steps}/> 
      )
      case 2 : 
      return (
        <FormChallenge teamId={teamId} challenge={challenge} setChallenge={setChallenge} currentStep={currentStep} setCurrentStep={setCurrentStep} setComplete={setComplete} steps={steps}/> 
      )
      case 3 : 
      return (
        <FormInvitation teamId={teamId} challengeName={challenge.challengeName}currentStep={currentStep} setCurrentStep={setCurrentStep} setComplete={setComplete} steps={steps}/> 
      )
      case 4 : 
      return (
        <GoHome />
      )
      default: return null
    }
  }
  return (
    <div className="flex flex-col items-center my-10 space-y-3 w-full">
      <LaunchChallenge width="3em" height="3em"/>
      <h1 className="font-bold text-2xl">Lancer un challenge</h1>
      <TiltedLabel>Règles du jeu</TiltedLabel>

      <Stepper 
        steps={steps}
        currentStep={currentStep} 
        setCurrentStep={setCurrentStep}
        complete={complete}
        setComplete={setComplete}
      />
      <div className="sm:max-w-[600px] w-full p-5">{renderForm()}</div>
    </div>
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
