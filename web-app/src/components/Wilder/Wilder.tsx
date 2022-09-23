import React from "react";
import { ToastContainer, toast } from "react-toastify";

import blankProfilePicture from "../../media/blank-profile-picture.png";
import { WilderType } from "../../types";
import { getErrorMessage } from "../../utils";
import CloseButton from "../CloseButton/CloseButton";
import Skill from "../Skill/Skill";
import { deleteWilder } from "./rest";
import {
  Card,
  CardImage,
  CardParagraph,
  CardSecondaryTitle,
  CardSkillList,
  CardTitle,
} from "./Wilder.styled";

type PropType = Omit<WilderType, "school"> & { onDelete: () => void };

const Wilder = ({ id, firstName, lastName, skills, onDelete }: PropType) => {
  const onCloseButtonClick = async () => {
    try {
      await deleteWilder(id);
      toast.success(`Wilder ${firstName} ${lastName} supprimé avec succès.`);
      onDelete();
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <Card>
      <CardImage src={blankProfilePicture} alt="Jane Doe Profile" />
      <CardTitle>
        {firstName} {lastName}
      </CardTitle>
      <CardParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </CardParagraph>
      <CardSecondaryTitle>Wild Skills</CardSecondaryTitle>
      <CardSkillList>
        {skills.map((skill) => (
          <li key={skill.id}>
            <Skill skillName={skill.skillName} numberOfVotes={1} />
          </li>
        ))}
      </CardSkillList>
      <CloseButton onClick={onCloseButtonClick} />
      <ToastContainer />
    </Card>
  );
};

export default Wilder;
