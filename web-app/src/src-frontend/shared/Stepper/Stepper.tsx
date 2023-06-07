import React, { useState } from "react";
import Check from "@assets/logos/Check";
import { WHITE } from "@src/src-frontend/constants/color";

type Props = { 
  currentStep: number,
  setCurrentStep: React.Dispatch<React.SetStateAction<any>> 

};

const Stepper = ({ currentStep, setCurrentStep }: Props) => {
  const steps = ["Créer ta Team", "Choisi le challenge", "Invites des participants", "Rdv Home"];
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="flex justify-between item-center max-w-[600px]">
        {steps?.map((step, i) => (
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
            {/* <p className="text-gray-500">{step}</p> */}
          </div>
          </>
        ))}
      </div>
      {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

export default Stepper;