import Skill from ".";
import { getSkillRepository } from "../../database/utils";

const initializeSkills = async () => {
  const skillRepository = await getSkillRepository();
  await skillRepository.clear();
  await skillRepository.save({
    skillName: "PHP",
  });
  await skillRepository.save({
    skillName: "JavaScript",
  });
};

async function getSkillByName(name: string): Promise<Skill | null> {
  const skillRepository = await getSkillRepository();
  return skillRepository.findOneBy({ skillName: name });
}

export { initializeSkills, getSkillByName };
