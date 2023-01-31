import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import Challenge from "./Challenge.entity";

export default class ChallengeDb {
  protected static repository: Repository<Challenge>;
  static async initializeRepository() {
    this.repository = await getRepository(Challenge);
  }

  protected static findChallengeById(challengeId: string) {
    return this.repository.findOneBy({ id: challengeId });
  }

  static async clearRepository(): Promise<void> {
    this.repository.delete({});
  }
}