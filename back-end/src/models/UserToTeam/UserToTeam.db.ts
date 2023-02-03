import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import UserToTeam from "./UserToTeam.entity";

export default class UserToTeamDb {
  protected static repository: Repository<UserToTeam>;
  static async initializeRepository() {
    this.repository = await getRepository(UserToTeam);
  }

  // protected static findTeamById(teamId: string) {
  //   return this.repository.findOneBy({ id: teamId });
  // }

  static async clearRepository(): Promise<void> {
    this.repository.delete({});
  }
}