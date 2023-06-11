import React, { useState } from "react";
import Check from "@assets/logos/Check";
import { WHITE } from "@src/src-frontend/constants/color";

type Props = { 
  steps: number[],
  currentStep: number,
  setCurrentStep: React.Dispatch<React.SetStateAction<any>>, 
  complete: boolean, 
  setComplete: React.Dispatch<React.SetStateAction<boolean>> 
};

const Stepper = (props: Props) => {
  return (
    <>
      <div className="flex item-center sm:max-w-[600px] w-full pt-10">
        {props.steps.map((step, i) => (
          <>
          <div
            key={i}
            className={`step-item ${props.currentStep === i + 1 && "active"} ${
              (i + 1 < props.currentStep || props.complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < props.currentStep || props.complete ? <Check width="14px" height="14px" fill={WHITE} />: i + 1}
            </div>
          </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Stepper;