import { DataSource, EntityTarget } from "typeorm";
import { DATABASE_URL, NODE_ENV, TEST_DATABASE_URL } from "../config";
import AppUserRepository from "../models/AppUser/AppUser.repository";
import SessionRepository from "../models/AppUser/Session.repository";
import ChallengeRepository from "../models/Challenge/Challenge.repository";
import InvitationRepository from "../models/Invitation/Invitation.repository";
import TeamRepository from "../models/Team/Team.repository";
import UserToTeamRepository from "../models/UserToTeam/UserToTeam.repository";
import ChallengeToTeamRepository from "../models/ChallengeToTeam/ChallengeToTeam.repository";

const dataSource = new DataSource({
  type: "postgres",
  url: NODE_ENV === "test" ? TEST_DATABASE_URL : DATABASE_URL,
  synchronize: true,
  entities: [__dirname + "/../models/**/*.entity.{js,ts}"],
  //logging: NODE_ENV === "development" ? ["query", "error"] : ["error"],
  logging: ["error"],
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

async function getRepository(entity: EntityTarget<any>) {
  return (await getDatabase()).getRepository(entity);
}

async function initializeDatabaseRepositories() {
  await AppUserRepository.initializeRepository();
  await SessionRepository.initializeRepository();
  await TeamRepository.initializeRepository();
  await ChallengeRepository.initializeRepository();
  await UserToTeamRepository.initializeRepository();
  await InvitationRepository.initializeRepository();
  await ChallengeToTeamRepository.initializeRepository();
}

async function closeConnection() {
  await dataSource.destroy();
}

export {
  getDatabase,
  getRepository,
  initializeDatabaseRepositories,
  closeConnection,
};
