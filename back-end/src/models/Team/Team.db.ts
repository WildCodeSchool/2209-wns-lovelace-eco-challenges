import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import Team from "./Team.entity";
import { teamBarcelone, teamBordeaux, teamParis, teamToulouse, teamTours } from "../../database/data";


export default class TeamDb {
  protected static repository: Repository<Team>;
  static async initializeRepository() {
    this.repository = await getRepository(Team);
  }

  static async clearRepository(): Promise<void> {
    await this.repository.delete({});
  }

  static async initializeTeams(): Promise<void> {
    await this.clearRepository();
    
    await this.repository.save([teamBarcelone, teamBordeaux, teamParis, teamToulouse, teamTours])
  }
}