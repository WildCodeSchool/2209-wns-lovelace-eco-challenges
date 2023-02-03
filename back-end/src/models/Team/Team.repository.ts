import Team from "./Team.entity";
import TeamDb from "./Team.db";
import { ILike, Like } from "typeorm";
import ChallengeRepository from "../Challenge/Challenge.repository";
import Challenge from "../Challenge/Challenge.entity";

export default class TeamRepository extends TeamDb {
  static async initializeTeams(): Promise<void> {
    await TeamRepository.clearRepository();
    const carpooling = (await ChallengeRepository.getChallengeByName("Covoiturage")) as Challenge; 
    const cleaningBeach = (await ChallengeRepository.getChallengeByName("Nettoyons")) as Challenge;
    const turnOffLights = (await ChallengeRepository.getChallengeByName("Eteignez")) as Challenge;
    const teamParis = new Team("Team Paris","Paris","France", true, undefined,undefined,[carpooling, turnOffLights])
    const teamBordeaux = new Team("Team Bordeaux","Bordeaux","France", false, undefined,undefined, undefined)
    const teamTours = new Team("Team Tours","TOURS","France", false, undefined,undefined, [carpooling])
    const teamToulouse = new Team("Team Toulouse","Toulouse","France", false, undefined,undefined, undefined)
    const teamBarcelone = new Team("Team Barcelone","Barcelone","Espagne",true, undefined,undefined, [cleaningBeach])
    
    await this.repository.save([teamBarcelone, teamBordeaux, teamParis, teamToulouse, teamTours])
  }

  static async getTeams(
    itemsByPage: number,
    pageNumber: number
  ): Promise<Team[]> {
    return this.repository.find({
      order: {teamName: "ASC"},
      relations: {
        userToTeams: true
      },
      take: itemsByPage,
      skip: (pageNumber -1) * itemsByPage,
    }); 
  }

  static async getTeamsByCity(
    city: string,
    itemsByPage: number, 
    pageNumber: number
    ): Promise<Team[] | null> {
    return this.repository.find({ 
      where : {
        city: ILike(`%${city}%`) 
      }, 
      relations : {
        userToTeams: {
          user: true
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
    ): Promise<Team[] | null> {
    return this.repository.find({ 
      where: {
        country: ILike(`%${country}%`) 
      },
      relations : {
        userToTeams: {
          user: true
        }
      },
      order: {teamName: "ASC"},
      take: itemsByPage,
      skip: (pageNumber -1) * itemsByPage,
    });
  }

  static async getTeamByName(teamName: string): Promise<Team | null> {
    return this.repository.findOne({ 
      where: {
        teamName: ILike(`%${teamName}%`)
      },
      relations : {
        userToTeams: {
          user: true
        }
      }
    });
  }

  static async createTeam(
    teamName: string,
    city: string, 
    country: string, 
    isPublic: boolean,
    img: string,  
  ): Promise<Team> {
    const newTeam = this.repository.create({ teamName, city, country, img, isPublic });
    await this.repository.save(newTeam);
    return newTeam;
  }

  static async updateTeam(
    id: string, 
    teamName: string, 
    city: string, 
    country: string, 
    img: string,
    isPublic: boolean 
  ): Promise<
    {
      id: string; 
      teamName: string;
      city: string; 
      country: string;
      img: string;
      isPublic: boolean;
    } & Team
  > {
    const existingTeam = await this.repository.findOneBy({ id }); 
    if (!existingTeam) {
      throw Error("No existing Team matching ID.");
    }
    return this.repository.save({
      id, 
      teamName,
      city,
      country,
      img,
      isPublic,
    });
  }

  static async deleteTeam(id: string): Promise<Team> {
    const existingTeam = await this.findTeamById(id);
    if (!existingTeam) {
      throw Error("No existing Team matching ID.");
    }
    await this.repository.remove(existingTeam);
    // resetting ID because existingTeam loses ID after calling remove
    existingTeam.id = id;
    return existingTeam;
  }

  static async addChallengeToTeam(
    teamId: string,
    challengeId: string
  ): Promise<Team> {
    const team = await this.findTeamById(teamId);
    if (!team) {
      throw Error("No existing Team matching ID.");
    }
    const challenge = await ChallengeRepository.getChallengeById(challengeId);
    if (!challenge) {
      throw Error("No existing challenge matching ID.");
    }
    team.challenges = [...team.challenges, challenge];
    return this.repository.save(team);
  }
}
