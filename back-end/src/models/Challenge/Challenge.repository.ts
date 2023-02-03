import ChallengeDb from "./Challenge.db";
import Challenge, { Category, Level } from "./Challenge.entity";
import { ArrayContains, ILike } from "typeorm"

export default class ChallengeRepository extends ChallengeDb {

  static async getChallenges(
    itemsByPage: number,
    pageNumber: number
  ): Promise<Challenge[]> {
    return this.repository.find({
      relations: {
        teams: {
          userToTeams: {
            user: true
          }
        }
      },
      order: {startsAt: "ASC"},
      take: itemsByPage,
      skip: (pageNumber -1) * itemsByPage,
    }); 
  }

  static async getChallengesByCategory(
    category: Category,
    itemsByPage: number, 
    pageNumber: number
    ): Promise<Challenge[] | null> {
    return this.repository.find({ 
      where: {
        category: ArrayContains([category]) 
      }, 
      relations: {
        teams: {
          userToTeams: {
            user: true
          }
        }
      },
      order: {startsAt: "ASC"},
      take: itemsByPage,
      skip: (pageNumber -1) * itemsByPage,
      });
  }

  static async getChallengesByLevel(
    level: Level,
    itemsByPage: number, 
    pageNumber: number
    ): Promise<Challenge[] | null> {
    return this.repository.find({ 
      where: {
        level: level 
      },
      relations: {
        teams: {
          userToTeams: {
            user: true
          }
        }
      },
      order: {startsAt: "ASC"},
      take: itemsByPage,
      skip: (pageNumber -1) * itemsByPage,
    });
  }

  static async getChallengeById(id: string): Promise<Challenge | null> {
    return this.repository.findOne({ 
      where: {
        id 
      }, 
      relations: {
        teams: {
          userToTeams: {
            user: true
          }
        }
      }
    }); 
  }

  static async getChallengeByName(challengeName: string): Promise<Challenge | null> {
    return this.repository.findOne({ 
      where : {
        challengeName: ILike(`%${challengeName}%`) 
      },
      relations: {
        teams: {
          userToTeams: {
            user: true
          }
        }
      }
    });
  }

  static async createChallenge(
    challengeName: string,
    level: Level, 
    description: string, 
    category: Category[],
    startsAt?: Date,
    endAt?: Date, 
    img?: string, 
  ): Promise<Challenge> { 
    const newChallenge = this.repository.create({ challengeName, level, description, category, startsAt, endAt, img });
    await this.repository.save(newChallenge);
    return newChallenge;
  }

  static async updateDatesChallenge(
    id: string, 
    startsAt?: Date,
    endAt?: Date, 
  ): Promise<
    {
    id: string, 
    startsAt?: Date,
    endAt?: Date, 
    } & Challenge
  > {
    const existingChallenge = await this.repository.findOneBy({ id }); 
    if (!existingChallenge) {
      throw Error("No existing Challenge matching ID.");
    }
    return this.repository.save({
      id, 
      startsAt,
      endAt,
    });
  }

  static async updateChallengePremium(
    id: string, 
    challengeName: string,
    level: Level, 
    description: string, 
    category: Category[],
    startsAt?: Date,
    endAt?: Date, 
    img?: string, 
  ): Promise<
    {
    id: string, 
    challengeName: string,
    level: Level, 
    description: string, 
    category: Category[],
    startsAt?: Date,
    endAt?: Date, 
    img?: string, 
    } & Challenge
  > {
    const existingChallenge = await this.repository.findOneBy({ id }); 
    if (!existingChallenge) {
      throw Error("No existing Challenge matching ID.");
    }
    return this.repository.save({
      id, 
      challengeName,
      level,
      description,
      category,
      startsAt,
      endAt,
      img
    });
  }

  static async deleteChallenge(id: string): Promise<Challenge> {
    const existingChallenge = await this.findChallengeById(id);
    if (!existingChallenge) {
      throw Error("No existing Challenge matching ID.");
    }
    await this.repository.remove(existingChallenge);
    // resetting ID because existingChallenge loses ID after calling remove
    existingChallenge.id = id;
    return existingChallenge;
  }
}