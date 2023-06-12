import React, { useState } from "react";
import Check from "@assets/logos/Check";
import { WHITE } from "@src/src-frontend/constants/color";
import FormTeam from "./FormTeam";
import FormChallenge from "./FormChallenge";
import FormInvitation from "./FormInvitation";
import GoHome from "./GoHome";


const FormStepper = () => {

  const steps=[1, 2, 3, 4]
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const [teamId, setTeamId] = useState("");
  const [challenge, setChallenge] = useState({ id: "", challengeName: "" });
  const userEmail = "user4@gmail.com"; //a recup avec le contexte
  
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
    <>
      <div className="flex item-center sm:max-w-[600px] w-full pt-10">
        {steps.map((step, i) => (
          <>
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <Check width="14px" height="14px" fill={WHITE} />: i + 1}
            </div>
          </div>
          </>
        ))}
      </div>
      <div className="sm:max-w-[600px] w-full p-5">{renderForm()}</div>
    </>
  );
};

export default FormStepper;