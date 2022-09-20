import { getWilderRepository, getSkillRepository } from "../../database/utils";
import { getSchoolByName } from "../School/manager";
import { getSkillByName } from "../Skill/manager";

import Wilder from ".";
import School from "../School";
import Skill from "../Skill";

async function initializeWilders(): Promise<void> {
  const wilderRepository = await getWilderRepository();
  await wilderRepository.clear();
  const lyonSchool = (await getSchoolByName("Lyon")) as School;
  const javaScriptSkill = (await getSkillByName("JavaScript")) as Skill;
  const phpSkill = (await getSkillByName("PHP")) as Skill;

  const jean = new Wilder("Jean", "Wilder", lyonSchool, [javaScriptSkill]);
  const jeanne = new Wilder("Jeanne", "Wilder", lyonSchool, [
    javaScriptSkill,
    phpSkill,
  ]);

  await wilderRepository.save([jean, jeanne]);
}

async function getWilders() {
  const wilderRepository = await getWilderRepository();
  return wilderRepository.find();
}

async function createWilder(firstName: string, lastName: string) {
  const wilderRepository = await getWilderRepository();
  const newWilder = wilderRepository.create({ firstName, lastName });
  await wilderRepository.save(newWilder);
  return newWilder;
}

async function updateWilder(id: string, firstName: string, lastName: string) {
  const wilderRepository = await getWilderRepository();
  const existingWilder = await wilderRepository.findOneBy({ id });
  if (!existingWilder) {
    throw Error("No existing Wilder matching ID.");
  }
  return wilderRepository.save({
    id,
    firstName,
    lastName,
  });
}

const deleteWilder = async (id: string) => {
  const wilderRepository = await getWilderRepository();
  const existingWilder = await wilderRepository.findOneBy({ id });
  if (!existingWilder) {
    throw Error("No existing Wilder matching ID.");
  }
  return wilderRepository.remove(existingWilder);
};

const addSkillToWilder = async (wilderId: string, skillId: string) => {
  const wilderRepository = await getWilderRepository();
  const skillRepository = await getSkillRepository();
  const wilder = await wilderRepository.findOneBy({ id: wilderId });
  if (!wilder) {
    throw Error("No existing Wilder matching ID.");
  }
  const skill = await skillRepository.findOneBy({ id: skillId });
  if (!skill) {
    throw Error("No existing skill matching ID.");
  }
  wilder.skills = [...wilder.skills, skill];
  return wilderRepository.save(wilder);
};

export {
  initializeWilders,
  getWilders,
  createWilder,
  updateWilder,
  deleteWilder,
  addSkillToWilder,
};
