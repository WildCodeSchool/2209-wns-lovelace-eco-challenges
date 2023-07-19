import { Repository } from "typeorm";
import ChallengeToTeam from "./ChallengeToTeam.entity";
import { getRepository } from "../../database/utils";
import { challengeTeamFour, challengeTeamOne, challengeTeamThree, challengeTeamTwo } from "../../database/data";

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

    await this.repository.save([challengeTeamOne, challengeTeamTwo, challengeTeamThree, challengeTeamFour])
  }
}