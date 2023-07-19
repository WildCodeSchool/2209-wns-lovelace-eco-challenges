import {
  closeConnection,
  initializeDatabaseRepositories,
} from "../../database/utils";
import ChallengeRepository from "../Challenge/Challenge.repository";
import TeamRepository from "../Team/Team.repository";
import ChallengeToTeamRepository from "./ChallengeToTeam.repository";

describe("ChallengeToTeamRepository integration", () => {

  beforeAll(async () => {
    await initializeDatabaseRepositories();
  });

  afterAll(async () => {
    await closeConnection();
  });

  beforeEach(async () => {
    await ChallengeToTeamRepository.clearRepository();
    await TeamRepository.initializeTeams();
    await ChallengeRepository.initializeChallenges();
    await ChallengeToTeamRepository.initializeChallengeToTeam();
  });


  describe("Add a challenge to Team", () => {
    describe("when is successfully completed", () => {  
      it("return the new challenge with team", async () => {
        const newTeam = await TeamRepository.createTeam("New TEAM", "Paris", "France", false); 
        const challenge = await ChallengeRepository.getChallengeByName("Covoiturage");
        const newChallengeToTeam = await ChallengeToTeamRepository.createChallengeToTeam(newTeam.id, challenge.id, new Date("2023-08-01T09:00:00+0000"), new Date("2024-08-01T09:00:00+0000"));

        expect(newChallengeToTeam.team.teamName).toBe("New team"); 
        expect(newChallengeToTeam.challenge.challengeName).toBe("Covoiturage"); 
      });                              
    });  

    describe("when adding fails", () => {
      describe("when the team Id or challenge Id doesn't exist", () => {   
        it("throw error", async () => {
          const noId = "e1789ea9-baa8-44e8-b43c-d62746aaf009";
          const newTeam = await TeamRepository.createTeam("Team Test", "Paris", "France", false); 
          const challenge = await ChallengeRepository.getChallengeByName("Covoiturage");

          await expect(() => 
            ChallengeToTeamRepository.createChallengeToTeam(noId, challenge.id, new Date("2023-08-01T09:00:00+0000"), new Date("2024-08-01T09:00:00+0000"))).rejects.toThrowError("No existing Team matching ID.");

          await expect(() => 
          ChallengeToTeamRepository.createChallengeToTeam(newTeam.id, noId, new Date("2023-08-01T09:00:00+0000"), new Date("2024-08-01T09:00:00+0000"))).rejects.toThrowError("No existing challenge matching ID.");
        });
      })

      describe("when the challenge has already been registered for the same period", () => {   
        it("throw error", async () => {
          const team = await TeamRepository.getTeamByName("Team Paris"); 
          const challenge = await ChallengeRepository.getChallengeByName("Covoiturage");

          await expect(() => 
            ChallengeToTeamRepository.createChallengeToTeam(team.id, challenge.id, new Date("2023-03-11T09:00:00+0000"), new Date("2024-03-11T09:00:00+0000"))).rejects.toThrowError("Your team is already playing this Challenge over this period");
        });
      })
    });   
  });
});  