import {
  closeConnection,
  initializeDatabaseRepositories,
} from "../../database/utils";
import { Category, Level } from "./Challenge.entity";
import ChallengeRepository from "./Challenge.repository";

describe("ChallengeRepository integration", () => {

  beforeAll(async () => {
    await initializeDatabaseRepositories();
    await ChallengeRepository.initializeChallenges();
  });

  afterAll(async () => {
    await closeConnection();
  });

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

});