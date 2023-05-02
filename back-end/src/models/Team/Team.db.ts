import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
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
    const teamParis = new Team("Team Paris","Paris","France", true)
    const teamBordeaux = new Team("Team Bordeaux","Bordeaux","France", false)
    const teamTours = new Team("Team Tours","TOURS","France", false)
    const teamToulouse = new Team("Team Toulouse","Toulouse","France", false)
    const teamBarcelone = new Team("Team Barcelone","Barcelone","Espagne",true)
    
    await this.repository.save([teamBarcelone, teamBordeaux, teamParis, teamToulouse, teamTours])
  }
}