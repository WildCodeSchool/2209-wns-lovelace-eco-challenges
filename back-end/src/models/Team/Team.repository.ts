import Team from "./Team.entity";
import TeamDb from "./Team.db";
import { ILike } from "typeorm";

export default class TeamRepository extends TeamDb {

  static async getTeams(
    itemsByPage: number,
    pageNumber: number
  ): Promise<Team[]> {
    return this.repository.find({
      order: {teamName: "ASC"},
      relations: {
        userToTeams: true,
        challengeToTeams: true
      },
      take: itemsByPage,
      skip: (pageNumber -1) * itemsByPage,
    }); 
  }

  static async getTeamsByCity(
    city: string,
    itemsByPage: number, 
    pageNumber: number
    ): Promise<Team[]> {
    return this.repository.find({ 
      where : {
        city: ILike(`%${city}%`) 
      }, 
      relations : {
        userToTeams: {
          user: true
        },
        challengeToTeams: {
          challenge: true
        }
      },
      order: {teamName: "ASC"},
      take: itemsByPage,
      skip: (pageNumber -1) * itemsByPage,
    });
  }

  static async getTeamsByCountry(
    country: string,
    itemsByPage: number, 
    pageNumber: number
    ): Promise<Team[]> {
    return this.repository.find({ 
      where: {
        country: ILike(`%${country}%`) 
      },
      relations : {
        userToTeams: {
          user: true
        },
        challengeToTeams: {
          challenge: true
        }
      },
      order: {teamName: "ASC"},
      take: itemsByPage,
      skip: (pageNumber -1) * itemsByPage,
    });
  }

  static async getTeamByName(teamName: string): Promise<Team> {
    const existingTeam = await this.repository.findOne({ 
      where: {
        teamName: ILike(`%${teamName}%`)
      },
      relations : {
        userToTeams: {
          user: true
        },
        challengeToTeams: {
          challenge: true
        }
      }
    });
    if (!existingTeam) {
      throw Error("No existing Team matching Name")
    } 
    return existingTeam;
  }

  static async getTeamById(id: string): Promise<Team> {
    const existingTeam = await this.repository.findOne({ 
      where: {
        id
      },
      relations : {
        userToTeams: {
          user: true
        },
        challengeToTeams: {
          challenge: true
        }
      }
    });
    if (!existingTeam) {
      throw Error("No existing Team matching ID.")
    } 
    return existingTeam;
  }

  static async createTeam(
    teamName: string,
    city: string, 
    country: string, 
    isPublic: boolean,
    img?: string,  
  ): Promise<Team> {
    const existingTeam = await this.repository.findOne({ where: { teamName } });
    if (existingTeam) {
      throw Error('This team Name already exists');
    }

    const newTeam = this.repository.create({ teamName, city, country, img, isPublic });
    await this.repository.save(newTeam);
    return newTeam;
  }

  static async updateTeam(
    id: string, 
    updatedTeam: Partial<Team>
  ): Promise<Team> {
    const existingTeam = await this.repository.findOneBy({ id }); 
    if (!existingTeam) {
      throw Error("No existing Team matching ID.");
    }
    return this.repository.save({
      ...existingTeam,
      ...updatedTeam
    });
  }

  static async deleteTeam(id: string): Promise<Team> {
    const existingTeam = await this.repository.findOneBy({ id });
    if (!existingTeam) {
      throw Error("No existing Team matching ID.");
    }
    await this.repository.remove(existingTeam);
    // resetting ID because existingTeam loses ID after calling remove
    existingTeam.id = id;
    return existingTeam;
  }
}
