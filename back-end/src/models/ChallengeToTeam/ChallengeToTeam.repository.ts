import Challenge from "../Challenge/Challenge.entity";
import Team from "../Team/Team.entity";
import TeamRepository from "../Team/Team.repository";
import ChallengeToTeamDb from "./ChallengeToTeam.db";
import ChallengeToTeam from "./ChallengeToTeam.entity";
import ChallengeRepository from "../Challenge/Challenge.repository";
import { QueryFailedError } from "typeorm";

export default class ChallengeToTeamRepository extends ChallengeToTeamDb {

  static async getChallengeToTeams(): Promise<ChallengeToTeam[]> {
    return this.repository.find({
      relations: {
        team : {
          userToTeams : true
        }
      }
    }) 
  }

  static async createChallengeToTeam(
    teamId: string,
    challengeId: string, 
    startsAt: Date,
    endAt: Date,
  ): Promise<ChallengeToTeam> {
    const team =(await TeamRepository.getTeamById(teamId)) as Team;

    const challenge = await ChallengeRepository.getChallengeById(challengeId) as Challenge;

    const newChallengeToTeam = this.repository.create({ 
      team, 
      challenge,
      startsAt,     
      endAt,
    });

    await this.repository.save(newChallengeToTeam).catch((error) => {
      if (error instanceof QueryFailedError && error.driverError.code === "23505") {
        throw new Error("Your team is already playing this Challenge over this period")
      } else {
        throw error;
      }
    });
    
    return newChallengeToTeam;
  }
}