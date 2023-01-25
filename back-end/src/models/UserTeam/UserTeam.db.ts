import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import UserTeam from "./UserTeam.entity";

export default class UserTeamDb {
  protected static repository: Repository<UserTeam>;
  static async initializeRepository() {
    this.repository = await getRepository(UserTeam);
  }

  // protected static findTeamById(teamId: string) {
  //   return this.repository.findOneBy({ id: teamId });
  // }

  static async clearRepository(): Promise<void> {
    this.repository.delete({});
  }
}