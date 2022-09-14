const { getWilderRepository } = require("../../database/utils");
const { getSchoolByName } = require("../School/manager");

async function initializeWilders() {
  const wilderRepository = await getWilderRepository();
  await wilderRepository.clear();
  const lyonSchool = await getSchoolByName("Lyon");
  await wilderRepository.save({
    firstName: "Jean",
    lastName: "Wilder",
    school: lyonSchool,
  });
  await wilderRepository.save({
    firstName: "Jeanne",
    lastName: "Wilder",
    school: lyonSchool,
  });
}

async function getWilders() {
  const wilderRepository = await getWilderRepository();
  return wilderRepository.find();
}

async function createWilder(firstName, lastName) {
  const wilderRepository = await getWilderRepository();
  const newWilder = wilderRepository.create({ firstName, lastName });
  await wilderRepository.save(newWilder);
  return newWilder;
}

async function updateWilder(id, firstName, lastName) {
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

const deleteWilder = async (id) => {
  const wilderRepository = await getWilderRepository();
  const existingWilder = await wilderRepository.findOneBy({ id });
  if (!existingWilder) {
    throw Error("No existing Wilder matching ID.");
  }
  return wilderRepository.remove(existingWilder);
};

module.exports = {
  initializeWilders,
  getWilders,
  createWilder,
  updateWilder,
  deleteWilder,
};
