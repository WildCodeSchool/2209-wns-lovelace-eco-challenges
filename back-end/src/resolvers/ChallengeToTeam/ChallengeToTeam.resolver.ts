import { Args, Authorized, Mutation, Query, Resolver } from "type-graphql";
import ChallengeToTeam from "../../models/ChallengeToTeam/ChallengeToTeam.entity";
import ChallengeToTeamRepository from "../../models/ChallengeToTeam/ChallengeToTeam.repository";
import { CreateChallengeToTeamArgs } from "./ChallengeToTeam.input";

@Resolver(ChallengeToTeam)
export default class ChallengeToTeamResolver {
  @Query(() => [ChallengeToTeam])
  challengeToTeams(): Promise<ChallengeToTeam[]> {
    return ChallengeToTeamRepository.getChallengeToTeams();
  }

  @Authorized()
  @Mutation(() => ChallengeToTeam)
  createChallengeToTeam(
    @Args() { 
      teamId, 
      challengeId, 
      startsAt,
      endAt,
    }: CreateChallengeToTeamArgs
  ): Promise<ChallengeToTeam> {
    return ChallengeToTeamRepository.createChallengeToTeam(
      teamId, 
      challengeId, 
      startsAt,
      endAt,
    )
  }
}