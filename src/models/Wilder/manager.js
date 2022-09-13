const { getWilderRepository } = require("../../database/utils");

async function initializeWilders() {
  const wilderRepository = await getWilderRepository();
  await wilderRepository.clear();
  await wilderRepository.save({ firstName: "Jean", lastName: "Wilder" });
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

module.exports = {
  initializeWilders,
  getWilders,
  createWilder,
  updateWilder,
};
