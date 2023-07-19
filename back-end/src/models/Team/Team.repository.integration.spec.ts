import {
  closeConnection,
  initializeDatabaseRepositories,
} from "../../database/utils";
import TeamRepository from "./Team.repository";

describe("TeamRepository integration", () => {

  beforeAll(async () => {
    await initializeDatabaseRepositories();
  });

  afterAll(async () => {
    await closeConnection();
  });

  beforeEach(async () => {
    await TeamRepository.clearRepository();
    await TeamRepository.initializeTeams();
  });


  describe("Create a new team", () => {
    describe("when is successfully completed", () => {  
      it("return the new team", async () => {
        const newTeam = await TeamRepository.createTeam("New TEAM", "Paris", "France", false)

        expect(newTeam.teamName).toBe("New TEAM")  
      });                              
    });  

    describe("when the team name already exists", () => {   
      it("throw error", async () => {

        await expect(() => 
          TeamRepository.createTeam("Team Paris", "PARIS", "France", true)).rejects.toThrowError("This team Name already exists");
      });
    });    
  });

  describe("Update a team", () => {
    describe("when is successfully updated", () => {   
      it("return updated team", async () => {
        const team = await TeamRepository.createTeam("Team Test", "Tours", "France", false);
        const city = "Bordeaux";
        const isPublic = true;

        const updatedTeam = await TeamRepository.updateTeam(team.id, { city, isPublic })

        expect(updatedTeam).toHaveProperty('teamName', 'Team test')
        expect(updatedTeam).toHaveProperty('city', 'Bordeaux')
        expect(updatedTeam).toHaveProperty('isPublic', true)
      });
    });  

    describe("when update has failed", () => {   
      it("throw error bad id", async () => {
        const noId = "e1789ea9-baa8-44e8-b43c-d62746aaf009";
        const city = "Bordeaux";

        await expect(() => TeamRepository.updateTeam(noId, { city })).rejects.toThrowError("No existing Team matching ID.")
      }); 

      it("throw error doublon teamName", async () => {
        const team = await TeamRepository.createTeam("New Team", "Lyon", "France", false);
        const teamName = "Team Paris";

        await expect(() => TeamRepository.updateTeam(team.id, { teamName })).rejects.toBeTruthy();
      });  
    });
  });

  describe("Delete a team", () => {
    describe("when is successfully deleted", () => {   
      it("returns the deleted team", async () => {
        const teamToDelete = await TeamRepository.createTeam("Team", "Nantes", "France", false);

        const deletedTeam = await TeamRepository.deleteTeam(teamToDelete.id); 

        expect(deletedTeam).toStrictEqual(teamToDelete);

        await expect(() => TeamRepository.getTeamById(teamToDelete.id)).rejects.toThrowError("No existing Team matching ID.")
      })
    });

    describe("when the id doesn't exist", () => {   
      it("throw error", async () => {
        const noId = "e1789ea9-baa8-44e8-b43c-d62746aaf009";

        await expect(() => TeamRepository.deleteTeam(noId)).rejects.toThrowError("No existing Team matching ID.")
      })
    });
  });    
});  

