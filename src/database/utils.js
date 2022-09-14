const typeorm = require("typeorm");
const Wilder = require("../models/Wilder");
const School = require("../models/School");
const Skill = require("../models/Skill");

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder, School, Skill],
  logging: ["query", "error"],
});

let initialized = false;
async function getDatabase() {
  if (!initialized) {
    await dataSource.initialize();
    initialized = true;
    console.log("Successfully connected to database.");
  }
  return dataSource;
}

async function getWilderRepository() {
  return (await getDatabase()).getRepository(Wilder);
}

async function getSchoolRepository() {
  return (await getDatabase()).getRepository(School);
}

const getSkillRepository = async () =>
  (await getDatabase()).getRepository(Skill);

module.exports = {
  getDatabase,
  getWilderRepository,
  getSchoolRepository,
  getSkillRepository,
};
