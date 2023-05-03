import Challenge from "../Challenge/Challenge.entity";
import Team from "../Team/Team.entity";
import TeamRepository from "../Team/Team.repository";
import ChallengeToTeamDb from "./ChallengeToTeam.db";
import ChallengeToTeam from "./ChallengeToTeam.entity";
import ChallengeRepository from "../Challenge/Challenge.repository";

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
    if (!team) {
      throw Error("No existing Team matching ID.");
    }
    const challenge = await ChallengeRepository.getChallengeById(challengeId) as Challenge;
    if (!challenge) {
      throw Error("No existing challenge matching ID.");
    }

    const newChallengeToTeam = this.repository.create({ 
      team, 
      challenge,
      startsAt,     
      endAt,
    });

    await this.repository.save(newChallengeToTeam);
    
    return newChallengeToTeam;
  }
}