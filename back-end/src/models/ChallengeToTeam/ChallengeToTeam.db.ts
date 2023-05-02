import { Repository } from "typeorm";
import ChallengeToTeam from "./ChallengeToTeam.entity";
import { getRepository } from "../../database/utils";
import ChallengeRepository from "../Challenge/Challenge.repository";
import Challenge from "../Challenge/Challenge.entity";
import TeamRepository from "../Team/Team.repository";
import Team from "../Team/Team.entity";

export default class ChallengeToTeamDb {
  protected static repository: Repository<ChallengeToTeam>;
  static async initializeRepository() {
    this.repository = await getRepository(ChallengeToTeam);
  }

  static async clearRepository(): Promise<void> {
    this.repository.delete({});
  }

  static async initializeChallengeToTeam(): Promise<void> {
    await this.clearRepository(); 
    const carpooling = (await ChallengeRepository.getChallengeByName("Covoiturage")) as Challenge; 
    const cleaningBeach = (await ChallengeRepository.getChallengeByName("Nettoyons")) as Challenge;
    const turnOffLights = (await ChallengeRepository.getChallengeByName("Eteignez")) as Challenge;
    const teamParis = (await TeamRepository.getTeamByName("Team Paris")) as Team; 
    const teamBarca = (await TeamRepository.getTeamByName("Team Barcelone")) as Team;
    const teamTours = (await TeamRepository.getTeamByName("Team Tours")) as Team;
    const challengeTeamOne = new ChallengeToTeam(teamParis, carpooling, new Date("2023-03-11T09:00:00+0000"), new Date("2024-03-11T09:00:00+0000"));
    const challengeTeamTwo = new ChallengeToTeam(teamParis, turnOffLights, new Date("2023-05-01T09:00:00+0000"), new Date ("2023-10-01T09:00:00+0000"));
    const challengeTeamThree = new ChallengeToTeam(teamBarca, cleaningBeach, new Date("2023-06-01T09:00:00+0000"), new Date("2023-10-01T09:00:00+0000"));
    const challengeTeamFour = new ChallengeToTeam(teamTours, carpooling, new Date("2023-01-01T09:00:00+0000"), new Date("2024-01-01T09:00:00+0000"));

    await this.repository.save([challengeTeamOne, challengeTeamTwo, challengeTeamThree, challengeTeamFour])
  }
}