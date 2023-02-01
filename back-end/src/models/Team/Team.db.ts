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
}