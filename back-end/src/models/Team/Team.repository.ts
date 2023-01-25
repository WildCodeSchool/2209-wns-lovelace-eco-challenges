import Team from "./Team.entity";
import TeamDb from "./Team.db";
import { ILike, Like } from "typeorm";

export default class TeamRepository extends TeamDb {
  static async initializeTeams(): Promise<void> {
    await TeamRepository.clearRepository();
    // await this.repository.delete({});
    await this.repository.save({
      teamName: "Team Paris",
      city: "Paris", 
      country: "France", 
      img: undefined, 
      isPublic: true,
    });
    await this.repository.save({
      teamName: "Team Bordeaux",
      city: "Bordeaux", 
      country: "France", 
      img: undefined, 
      isPublic: false,
    });
    await this.repository.save({
      teamName: "Team Tours",
      city: "TOURS", 
      country: "France", 
      img: undefined, 
      isPublic: false,
    });
    await this.repository.save({
      teamName: "Team Toulouse",
      city: "Toulouse", 
      country: "France", 
      img: undefined, 
      isPublic: false,
    });
    await this.repository.save({
      teamName: "Team Barcelone",
      city: "Barcelone", 
      country: "Espagne", 
      img: undefined, 
      isPublic: true,
    });
  }

  static async getTeams(): Promise<Team[]> {
    return this.repository.find(); 
  }

  static async getTeamByCity(city: string): Promise<Team[] | null> {
    return this.repository.findBy({ city: ILike(`%${city}%`) });
  }

  static async getTeamByCountry(country: string): Promise<Team[] | null> {
    return this.repository.findBy({ country: ILike(`%${country}%`) });
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
}
