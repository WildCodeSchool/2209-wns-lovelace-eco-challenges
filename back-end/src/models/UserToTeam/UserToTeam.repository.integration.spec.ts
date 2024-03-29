import {
  closeConnection,
  initializeDatabaseRepositories,
  truncateAllTables,
} from "../../database/utils";
import AppUserRepository from "../AppUser/AppUser.repository";
import { InvitationStatus } from "../Invitation/Invitation.entity";
import TeamRepository from "../Team/Team.repository";
import { UserRole } from "./UserToTeam.entity";
import UserToTeamRepository from "./UserToTeam.repository";

describe.only("UserToTeamRepository integration", () => {

  beforeAll(async () => {
    await initializeDatabaseRepositories();
  });

  afterAll(async () => {
    await truncateAllTables();
    await closeConnection();
  });

  beforeEach(async () => {
    await truncateAllTables();
    await TeamRepository.initializeTeams();
    await AppUserRepository.initializeUsers();
    await UserToTeamRepository.initializeUserToTeam();
  });

  describe("Add a user to Team", () => {
    describe("when is successfully completed", () => {  
      it("return the user with team", async () => {
        const team = await TeamRepository.getTeamByName("Team barcelone"); 
        const user = await AppUserRepository.getUserByNickname("User4");
        const newUserToTeam = await UserToTeamRepository.createUserToTeam(team.id, user.email, UserRole.ADMIN);

        expect(newUserToTeam.team.teamName).toBe(team.teamName); 
        expect(newUserToTeam.user.firstName).toBe(user.firstName);
        expect(newUserToTeam.userRole).toBe("admin"); 
      });
      
      describe("when userEmail doesn't exist in the database", () => {  
        it("create a user to be checked and return new user with team", async () => {
          const team = await TeamRepository.getTeamByName("Team Barcelone"); 
          const userEmail = "newUser@test.com";
          const newUserToTeam = await UserToTeamRepository.createUserToTeam(team.id, userEmail, UserRole.PLAYER);

          expect(newUserToTeam.team.teamName).toBe(team.teamName); 
          expect(newUserToTeam.user.firstName).toBe("");
          expect(newUserToTeam.user.email).toBe(userEmail);
          expect(newUserToTeam.user.isVerified).toBe(false);
          expect(newUserToTeam.userRole).toBe("player"); 
        });                              
      });

      describe("when userRole is Player send invitation with custom name and status pending", () => {  
        it("create invitation and return user with team", async () => {
          const team = await TeamRepository.getTeamByName("Team tours"); 
          const user = await AppUserRepository.getUserByNickname("User5");
          const challengeName = "Covoiturage"; 
          const newUserToTeam = await UserToTeamRepository.createUserToTeam(team.id, user.email, UserRole.PLAYER, challengeName);

          expect(newUserToTeam.team.teamName).toBe(team.teamName); 
          expect(newUserToTeam.user.email).toBe(user.email);
          expect(newUserToTeam.user.isVerified).toBe(true);
          expect(newUserToTeam.userRole).toBe("player"); 
          expect(newUserToTeam.invitation.name).toBe(`${team.teamName}-${challengeName}-${user.email}`)
          expect(newUserToTeam.invitation.status).toBe(InvitationStatus.PENDING)
        });                              
      });    
    });  

    describe("when adding fails", () => {
      describe("when the team Id doesn't exist", () => { 
        it("throw error", async () => {
          const teamId = "1234b5a1-97d3-48f9-8f14-163e0711ac88";
          const userEmail = "user@email.com";
          
          await expect(() => UserToTeamRepository.createUserToTeam(teamId, userEmail, UserRole.ADMIN)).rejects.toThrowError("No existing Team");
        });
      })

      describe("when the user is already in the team", () => {    
        it("throw error", async () => {
          const team = await TeamRepository.getTeamByName("Team Paris"); 
          const user = await AppUserRepository.getUserByNickname("User1");

          expect(user.userToTeams.filter(el => el.team.teamName == "Team paris")[0]).toHaveProperty('userRole', 'admin')

          await expect(() => 
          UserToTeamRepository.createUserToTeam(team.id, user.email, UserRole.PLAYER)).rejects.toBeTruthy();
        });
      })
    });   
  });
});
