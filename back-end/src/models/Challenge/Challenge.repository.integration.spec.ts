import {
  closeConnection,
  initializeDatabaseRepositories,
} from "../../database/utils";
import { Category, Level } from "./Challenge.entity";
import ChallengeRepository from "./Challenge.repository";

describe("ChallengeRepository integration", () => {

  beforeAll(async () => {
    await initializeDatabaseRepositories();
  });

  afterAll(async () => {
    await closeConnection();
  });

  beforeEach(async () => {
    await ChallengeRepository.clearRepository();
    await ChallengeRepository.initializeChallenges();
  })

  describe("get challenge challenges based on pagination", () => {
    it("returns a set number of challenges per page", async () => {
      const itemsByPage = 3; 
      const challenges = await ChallengeRepository.getChallenges(itemsByPage, 1); 

      expect(challenges.length).toEqual(itemsByPage);
    })

    it("returns a set number of challenges per page", async () => {
      const challenges = await ChallengeRepository.getChallenges(100, 1); 
      const challengesGivenPage = await ChallengeRepository.getChallenges(3, 2);

      expect(challengesGivenPage).toStrictEqual(challenges.slice(3, 6));
    })
  })

  describe("get Challenges by category", () => {
    describe("Should return a challenges list with correct category or empty array", () => {
      it("return a list of PROTECTSNATURE challenges", async () => {
        const challenges = await ChallengeRepository.getChallengesByCategory(Category.PROTECTSNATURE, 5, 1);

        challenges.forEach(challenge => {
          expect(challenge.category).toContainEqual(Category.PROTECTSNATURE)  
        });
      });

      it("return a list of CARPOOLING challenges", async () => {
        const challenges = await ChallengeRepository.getChallengesByCategory(Category.CARPOOLING, 5, 1);

        challenges.forEach(challenge => {
          expect(challenge.category).toContainEqual(Category.CARPOOLING)  
        });
      });    

      it("return a list of LESS challenges", async () => {
        const challenges = await ChallengeRepository.getChallengesByCategory(Category.LESS, 5, 1);

        challenges.forEach(challenge => {
          expect(challenge.category).toContainEqual(Category.LESS)  
        });
      });    
    });
  });

  describe("get Challenges by level", () => {
    describe("Should return a challenges list with correct level or empty array", () => {
      it("return a list of EASY challenges", async () => {
        const challenges = await ChallengeRepository.getChallengesByLevel(Level.EASY, 5, 1);

        challenges.forEach(challenge => {
          expect(challenge.level).toBe(Level.EASY)  
        });
      });

      it("return a list of SUPERGREEN challenges", async () => {
        const challenges = await ChallengeRepository.getChallengesByLevel(Level.SUPERGREEN, 5, 1);

        challenges.forEach(challenge => {
          expect(challenge.level).toBe(Level.SUPERGREEN)  
        });
      });     
    });
  });

  describe("get Challenges by Name", () => {
    describe("Should return the good challenges", () => {      
      it("return the challenge", async () => {
        const challenge = await ChallengeRepository.getChallengeByName("Plage");

        expect(challenge.challengeName).toBe("Nettoyons nos plages")  
      });
      
      it("no challenge found", async () => {
        const challengeName = "Non-existent Challenge";

        await expect(() =>
          ChallengeRepository.getChallengeByName(challengeName)).rejects.toThrowError("No existing Challenge matching Name");
      });
    });     
  });

  describe("Create a new challenge", () => {
    describe("when is successfully completed", () => {  
      it("return the new challenge", async () => {
        const newChallenge = await ChallengeRepository.createChallenge("New challenge", Level.CHALLENGING, "the new challenge for test", [Category.SELFSUFFICIENCY, Category.LESS])

        expect(newChallenge.challengeName).toBe("New challenge")  
      });
    });  

    describe("when the challenge name already exists", () => {   
      it("throw error", async () => {

        await expect(() => 
          ChallengeRepository.createChallenge("COVOITURAGE", Level.MODERATE,  "the doublon challenge for test", [Category.CARPOOLING, Category.LESS])).rejects.toBeTruthy();
      });
    });    
  });

  describe("Update a challenge", () => {
    describe("when is successfully updated", () => {   
      it("return updated challenge", async () => {
        const challenge = await ChallengeRepository.createChallenge("Challenge", Level.CHALLENGING, "Challenge for test", [Category.SELFSUFFICIENCY, Category.LESS]);
        const description = "Challenge updated";
        const level = Level.EASY

        const updatedChallenge = await ChallengeRepository.updateChallengePremium(challenge.id, { level, description }
        )

        expect(updatedChallenge).toHaveProperty('challengeName', 'Challenge')
        expect(updatedChallenge).toHaveProperty('level', level)
        expect(updatedChallenge).toHaveProperty('description', description)
        expect(updatedChallenge).toHaveProperty('category', ["Autosuffisance", "Réduction"])
      });
    });  

    describe("when update has failed", () => {   
      it("throw error bad id", async () => {
        const noId = "e1789ea9-baa8-44e8-b43c-d62746aaf009";
        const description = "Challenge updated";
        const level = Level.EASY;

        await expect(() => ChallengeRepository.updateChallengePremium(noId, { level, description })).rejects.toThrowError("No existing Challenge matching ID.")
      }); 

      it("throw error doublon challengeName", async () => {
        const challenge = await ChallengeRepository.createChallenge("Challenge", Level.CHALLENGING, "Challenge for test", [Category.LESS]);
        const challengeName = "COVOITURAGE";

        await expect(() => ChallengeRepository.updateChallengePremium(challenge.id, { challengeName })).rejects.toBeTruthy();
      });  
    });
  });
});
