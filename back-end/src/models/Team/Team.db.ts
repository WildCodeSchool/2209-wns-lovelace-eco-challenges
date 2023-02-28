import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import Challenge from "../Challenge/Challenge.entity";
import ChallengeRepository from "../Challenge/Challenge.repository";
import Team from "./Team.entity";


export default class TeamDb {
  protected static repository: Repository<Team>;
  static async initializeRepository() {
    this.repository = await getRepository(Team);
  }

  protected static findTeamById(teamId: string) {
    return this.repository.findOneBy({ id: teamId });
  }

  static async clearRepository(): Promise<void> {
    await this.repository.delete({});
  }

  static async initializeTeams(): Promise<void> {
    await this.clearRepository();
    const carpooling = (await ChallengeRepository.getChallengeByName("Covoiturage")) as Challenge; 
    const cleaningBeach = (await ChallengeRepository.getChallengeByName("Nettoyons")) as Challenge;
    const turnOffLights = (await ChallengeRepository.getChallengeByName("Eteignez")) as Challenge;
    const teamParis = new Team("Team Paris","Paris","France", true, undefined,undefined,[carpooling, turnOffLights])
    const teamBordeaux = new Team("Team Bordeaux","Bordeaux","France", false, undefined,undefined, undefined)
    const teamTours = new Team("Team Tours","TOURS","France", false, undefined,undefined, [carpooling])
    const teamToulouse = new Team("Team Toulouse","Toulouse","France", false, undefined,undefined, undefined)
    const teamBarcelone = new Team("Team Barcelone","Barcelone","Espagne",true, undefined,undefined, [cleaningBeach])
    
    await this.repository.save([teamBarcelone, teamBordeaux, teamParis, teamToulouse, teamTours])
  }
}