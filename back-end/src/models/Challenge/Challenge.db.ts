import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import Challenge from "./Challenge.entity";
import { challengeEight, challengeFive, challengeFour, challengeNine, challengeOne, challengeSeven, challengeSix, challengeThree, challengeTwo } from "../../database/data";

export default class ChallengeDb {
  protected static repository: Repository<Challenge>;
  static async initializeRepository() {
    this.repository = await getRepository(Challenge);
  }

  protected static findChallengeById(challengeId: string) {
    return this.repository.findOneBy({ id: challengeId });
  }

  static async clearRepository(): Promise<void> {
    await this.repository.delete({});
  }

  static async initializeChallenges(): Promise<void> {
    await this.clearRepository();
    await this.repository.save([challengeOne, challengeTwo, challengeThree, challengeFour, challengeFive, challengeSix, challengeSeven, challengeEight, challengeNine])
  }
}