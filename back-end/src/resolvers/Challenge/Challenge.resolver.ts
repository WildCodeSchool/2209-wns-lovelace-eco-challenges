
import { Arg, Args, ID, Mutation, Query, Resolver } from "type-graphql";
import Challenge, { Category, Level } from "../../models/Challenge/Challenge.entity";
import ChallengeRepository from "../../models/Challenge/Challenge.repository";
import { CreateChallengeArgs, UpdateChallengePremiumArgs, UpdateDatesChallengeArgs } from "./Challenge.input";

@Resolver(Challenge)
export default class ChallengeResolver {
  @Query(() => [Challenge])
  challenges(): Promise<Challenge[]> {
    return ChallengeRepository.getChallenges(); 
  }

  @Query(() => [Challenge])
  challengesByCategory(@Arg("category", type => [Category]) category : Category): Promise<Challenge[] | null> {
    return ChallengeRepository.getChallengesByCategory(category); 
  }

  @Query(() => [Challenge])
  challengesByLevel(@Arg("level", type => Level) level : Level): Promise<Challenge[] | null> {
    return ChallengeRepository.getChallengesByLevel(level); 
  }

  @Query(() => Challenge)
  challengeById(@Arg("id") id : string): Promise<Challenge | null> {
    return ChallengeRepository.getChallengeById(id); 
  }

  @Query(() => Challenge)
  challengeByName(@Arg("challengeName") challengeName : string): Promise<Challenge | null> {
    return ChallengeRepository.getChallengeByName(challengeName); 
  }

  @Mutation(() => Challenge)
  createChallenge(
    @Args() { 
      challengeName, 
      level, 
      description,
      category, 
      startsAt, 
      endAt,
      img
    }: CreateChallengeArgs
  ): Promise<Challenge> {
    return ChallengeRepository.createChallenge(
      challengeName, 
      level, 
      description,
      category, 
      startsAt, 
      endAt,
      img
    )
  }

  @Mutation(() => Challenge)
  updateDatesChallenge(
    @Args() { 
      id, 
      startsAt,
      endAt
    }: UpdateDatesChallengeArgs
  ): Promise<Challenge> {
    return ChallengeRepository.updateDatesChallenge(id, startsAt, endAt);
  }

  @Mutation(() => Challenge)
  updateChallengePremium(
    @Args() { 
      id, 
      challengeName, 
      level, 
      description,
      category, 
      startsAt, 
      endAt,
      img
    }: UpdateChallengePremiumArgs
  ): Promise<Challenge> {
    return ChallengeRepository.updateChallengePremium(id, challengeName, level, description, category, startsAt, endAt, img);
  }

  @Mutation(() => Challenge)
  deleteChallenge(@Arg("id") id: string): Promise<Challenge> {
    return ChallengeRepository.deleteChallenge(id);
  }
}