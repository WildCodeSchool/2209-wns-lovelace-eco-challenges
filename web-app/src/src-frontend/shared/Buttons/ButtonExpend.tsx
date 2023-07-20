import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { PRIMARY } from "@constants/color";
import LaunchChallenge from "@assets/logos/LaunchChallenge";
import Button from "./Button";

type Props = {
  name: string;
  type: string;
  icon?: React.ReactNode;
  img: string;
  challengeName: string;
  desc: string;
  level: string;
};

const ButtonExpend = (props: Props) => {
  const { img, challengeName, desc, level } = props;

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    console.log("Expanded state:", expanded);
  }, [expanded]);

  const handleExpandClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const { t } = useTranslation(["challenge", "page"]);

  return (
    <div className="button-expend flex flex-col items-center">
      <div className="button w-2/2  content-center">
        <Button onClickEvent={handleExpandClick}
          icon={
            <LaunchChallenge width="20px" height="20px" fill={PRIMARY} />
          }
          type="button-secondary"
          name={"Plus de challenge"}
        />
      </div>
      {expanded && (
        <div className="flex justify-center items-center w-full h-full mt-8">
          <div className="mx-auto w-[400px]">
            <div className="relative w-full h-[300px]">
              <img src={img} alt={challengeName} className="img-left" />
            </div>
            <div className="w-full mt-8">
              <p className="font-bold text-2xl text-center">{challengeName}</p>
              <p className="text-center">{desc}</p>
              <p className="text-center">{level}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonExpend;
