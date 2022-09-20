import School from ".";
import { getSchoolRepository, getWilderRepository } from "../../database/utils";

async function initializeSchools(): Promise<void> {
  const schoolRepository = await getSchoolRepository();
  const wilderRepository = await getWilderRepository();
  await wilderRepository.clear();
  await schoolRepository.clear();
  await schoolRepository.save({
    schoolName: "Lyon",
  });
  await schoolRepository.save({
    schoolName: "Brest",
  });
}

async function getSchoolByName(name: string): Promise<School | null> {
  const schoolRepository = await getSchoolRepository();
  return schoolRepository.findOneBy({ schoolName: name });
}

export { initializeSchools, getSchoolByName };
