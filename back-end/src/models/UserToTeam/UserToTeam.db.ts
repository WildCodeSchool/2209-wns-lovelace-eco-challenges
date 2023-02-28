import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import AppUser from "../AppUser/AppUser.entity";
import AppUserRepository from "../AppUser/AppUser.repository";
import Team from "../Team/Team.entity";
import TeamRepository from "../Team/Team.repository";
import UserToTeam, { UserRole } from "./UserToTeam.entity";

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

  static async initializeUserToTeam(): Promise<void> {
    await this.clearRepository(); 

    const userOne = (await AppUserRepository.getUserByNickname("User1")) as AppUser; 
    const userTwo = (await AppUserRepository.getUserByNickname("User2")) as AppUser; 
    const userThree = (await AppUserRepository.getUserByNickname("User3")) as AppUser; 
    const teamParis = (await TeamRepository.getTeamByName("Team Paris")) as Team; 
    const teamBarca = (await TeamRepository.getTeamByName("Team Barcelone")) as Team;
    const teamTours = (await TeamRepository.getTeamByName("Team Tours")) as Team;
    const userTeamOne = new UserToTeam(teamParis, userOne, UserRole.ADMIN, 0, false, undefined)
    const userTeamTwo = new UserToTeam(teamParis, userTwo, UserRole.PLAYER, 0, false, undefined)
    const userTeamThree = new UserToTeam(teamBarca, userThree, UserRole.ADMIN, 0, false, undefined)
    const userTeamFour = new UserToTeam(teamTours, userOne, UserRole.PLAYER, 0, false, undefined)

    await this.repository.save([userTeamOne, userTeamTwo, userTeamThree, userTeamFour])
  }
}