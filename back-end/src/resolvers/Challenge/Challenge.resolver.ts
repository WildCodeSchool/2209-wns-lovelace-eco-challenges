import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import Challenge, { Category, Level } from "../../models/Challenge/Challenge.entity";
import ChallengeRepository from "../../models/Challenge/Challenge.repository";

@Resolver(Challenge)
export default class ChallengeResolver {
  @Query(() => [Challenge])
  challenges(): Promise<Challenge[]> {
    return ChallengeRepository.getChallenges(); 
  }

  @Query(() => [Challenge])
  challengeByCategory(@Arg("category", type => Category) category : Category): Promise<Challenge[] | null> {
    return ChallengeRepository.getChallengesByCategory(category); 
  }

  @Query(() => [Challenge])
  challengeByLevel(@Arg("level", type => Level) level : Level): Promise<Challenge[] | null> {
    return ChallengeRepository.getChallengesByLevel(level); 
  }

  // @Mutation(() => Team)
  // createTeam(
  //   @Args() { 
  //     teamName, 
  //     city, 
  //     country,
  //     isPublic, 
  //     img, 
  //   }: CreateTeamArgs
  // ): Promise<Team> {
  //   return TeamRepository.createTeam(
  //     teamName, 
  //     city, 
  //     country, 
  //     isPublic, 
  //     img,
  //   )
  // }

  // @Mutation(() => Team)
  // updateTeam(
  //   @Args() { 
  //     id, 
  //     teamName, 
  //     city, 
  //     country, 
  //     isPublic,  
  //     img, 
  //   }: UpdateTeamArgs
  // ): Promise<Team> {
  //   return TeamRepository.updateTeam(id, teamName, city, country, img, isPublic);
  // }

  // @Mutation(() => Team)
  // deleteTeam(@Arg("id") id: string): Promise<Team> {
  //   return TeamRepository.deleteTeam(id);
  // }
}