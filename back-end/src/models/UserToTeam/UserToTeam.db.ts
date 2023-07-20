import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import UserToTeam from "./UserToTeam.entity";
import { userTeamFour, userTeamOne, userTeamThree, userTeamTwo } from "../../database/data";

export default class UserToTeamDb {
  protected static repository: Repository<UserToTeam>;
  static async initializeRepository() {
    this.repository = await getRepository(UserToTeam);
  }

  static async clearRepository(): Promise<void> {
    this.repository.delete({});
  }

  static async initializeUserToTeam(): Promise<void> {
    await this.clearRepository(); 

    await this.repository.save([userTeamOne, userTeamTwo, userTeamThree, userTeamFour])
  }
}