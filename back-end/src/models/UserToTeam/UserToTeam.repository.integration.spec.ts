import {
  closeConnection,
  initializeDatabaseRepositories,
} from "../../database/utils";
import AppUserRepository from "../AppUser/AppUser.repository";
import { InvitationStatus } from "../Invitation/Invitation.entity";
import TeamRepository from "../Team/Team.repository";
import { UserRole } from "./UserToTeam.entity";
import UserToTeamRepository from "./UserToTeam.repository";

describe("ChallengeToTeamRepository integration", () => {

  beforeAll(async () => {
    await initializeDatabaseRepositories();
  });

  afterAll(async () => {
    await closeConnection();
  });

  beforeEach(async () => {
    await UserToTeamRepository.clearRepository();
    await AppUserRepository.initializeUsers(); 
    await UserToTeamRepository.initializeUserToTeam();
  });


  describe("Add a user to Team", () => {
    describe("when is successfully completed", () => {  
      it("return the user with team", async () => {
        const team = await TeamRepository.getTeamByName("Team Barcelone"); 
        const user = await AppUserRepository.getUserByNickname("User5");
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
          const team = await TeamRepository.getTeamByName("Team Toulouse"); 
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
          const noId = "e1789ea9-baa8-44e8-b43c-d62746aaf009";
          const user = await AppUserRepository.getUserByNickname("User5");
          
          await expect(() => UserToTeamRepository.createUserToTeam(noId, user.email, UserRole.ADMIN)).rejects.toThrowError("No existing Team matching ID.");
        });
      })

      describe("when the team Id doesn't exist", () => {   
        it("throw error", async () => {
          const noId = "e1789ea9-baa8-44e8-b43c-d62746aaf009";
          const user = await AppUserRepository.getUserByNickname("User5");
          
          await expect(() => UserToTeamRepository.createUserToTeam(noId, user.email, UserRole.ADMIN)).rejects.toThrowError("No existing Team matching ID.");
        });
      })

      describe("when the user is already in the team", () => {   
        it("throw error", async () => {
          const team = await TeamRepository.getTeamByName("Team Paris"); 
          const user = await AppUserRepository.getUserByNickname("User1");

          await expect(() => 
          UserToTeamRepository.createUserToTeam(team.id, user.email, UserRole.PLAYER)).rejects.toBeTruthy();



          expect(user.userToTeams.filter(el => el.team.teamName == "Team paris")[0]).toHaveProperty('userRole', 'admin')
        });
      })
    });   
  });
});