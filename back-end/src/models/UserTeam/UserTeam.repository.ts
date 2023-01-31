import UserTeamDb from "./UserTeam.db";
import UserTeam from "./UserTeam.entity";


export default class UserTeamRepository extends UserTeamDb {

  static async getUserTeams(): Promise<UserTeam[]> {
    return this.repository.find(); 
  }

  // static async getMemberByCity(city: string): Promise<Team | null> {
  //   return this.repository.findOneBy({ city: city });
  // }

  // static async getTeamByCountry(country: string): Promise<Team | null> {
  //   return this.repository.findOneBy({  country: country });
  // }

  // static async createTeam(
  //   teamName: string,
  //   city: string, 
  //   country: string, 
  //   img: string, 
  //   isPublic: boolean, 
  // ): Promise<Team> {
  //   const newTeam = this.repository.create({ teamName, city, country, img, isPublic });
  //   await this.repository.save(newTeam);
  //   return newTeam;
  // }

  // static async updateTeam(
  //   id: string, 
  //   teamName: string, 
  //   city: string, 
  //   country: string, 
  //   img: string,
  //   isPublic: boolean 
  // ): Promise<
  //   {
  //     id: string; 
  //     teamName: string;
  //     city: string; 
  //     country: string;
  //     img: string;
  //     isPublic: boolean;
  //   } & Team
  // > {
  //   const existingTeam = await this.repository.findOneBy({ id }); 
  //   if (!existingTeam) {
  //     throw Error("No existing Team matching ID.");
  //   }
  //   return this.repository.save({
  //     id, 
  //     teamName,
  //     city,
  //     country,
  //     img,
  //     isPublic,
  //   });
  // }

  // static async deleteTeam(id: string): Promise<Team> {
  //   const existingTeam = await this.findTeamById(id);
  //   if (!existingTeam) {
  //     throw Error("No existing Team matching ID.");
  //   }
  //   await this.repository.remove(existingTeam);
  //   // resetting ID because existingTeam loses ID after calling remove
  //   existingTeam.id = id;
  //   return existingTeam;
  // }
}