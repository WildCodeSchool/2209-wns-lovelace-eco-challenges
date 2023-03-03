import AppUser from "../AppUser/AppUser.entity";
import AppUserRepository from "../AppUser/AppUser.repository";
import Invitation from "../Invitation/Invitation.entity";
import Team from "../Team/Team.entity";
import TeamRepository from "../Team/Team.repository";
import UserToTeamDb from "./UserToTeam.db";
import UserToTeam, { UserRole } from "./UserToTeam.entity";

export default class UserToTeamRepository extends UserToTeamDb {

  static async getUserToTeams(): Promise<UserToTeam[]> {
    return this.repository.find(); 
  }

  static async createUserToTeam(
    teamId: string,
    userEmail: string, 
    userRole: UserRole,
  ): Promise<UserToTeam> {
    const team =(await TeamRepository.getTeamById(teamId)) as Team;

    let user = await AppUserRepository.findByEmail
    (userEmail) as AppUser;

    if (!user) {
      user = await AppUserRepository.createUserToBeChecked(userEmail) as AppUser; 
    }

    const newUserToTeam = this.repository.create({ 
      team, 
      user, 
      userRole
    });
    await this.repository.save(newUserToTeam);
    return newUserToTeam;
  }
}


