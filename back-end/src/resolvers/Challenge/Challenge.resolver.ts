
import { Arg, Args, ID, Int, Mutation, Query, Resolver } from "type-graphql";
import Challenge, { Category, Level } from "../../models/Challenge/Challenge.entity";
import ChallengeRepository from "../../models/Challenge/Challenge.repository";
import { Pagination } from "../InputArgsForAll";
import { CreateChallengeArgs, UpdateChallengePremiumArgs, UpdateDatesChallengeArgs } from "./Challenge.input";

// const PAGE_SIZE = 6;

@Resolver(Challenge)
export default class ChallengeResolver {
  @Query(() => [Challenge])
  challenges(@Args() { 
    itemsByPage, 
    pageNumber 
  } : Pagination
  ): Promise<Challenge[]> {
    return ChallengeRepository.getChallenges(itemsByPage, pageNumber); 
  }

  @Query(() => [Challenge])
  challengesLight(): Promise<Challenge[]> {
    return ChallengeRepository.getChallengesLight(); 
  }

  @Query(() => [Challenge])
  challengesByCategory(
    @Arg("category", type => [Category]) category : Category,
    @Args() { itemsByPage, pageNumber } : Pagination
    ): Promise<Challenge[]> {
    return ChallengeRepository.getChallengesByCategory(category, itemsByPage, pageNumber); 
  }

  @Query(() => [Challenge])
  challengesByLevel(
    @Arg("level", type => Level) level : Level,
    @Args() { itemsByPage, pageNumber } : Pagination
    ): Promise<Challenge[]> {
    return ChallengeRepository.getChallengesByLevel(level, itemsByPage, pageNumber); 
  }

  @Query(() => Challenge)
  challengeById(@Arg("id") id : string): Promise<Challenge> {
    return ChallengeRepository.getChallengeById(id); 
  }

  @Query(() => Challenge)
  challengeByName(@Arg("challengeName") challengeName : string): Promise<Challenge> {
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
    return ChallengeRepository.updateChallengePremium(id, { challengeName, level, description, category, startsAt, endAt, img});
  }

  @Mutation(() => Challenge)
  deleteChallenge(@Arg("id") id: string): Promise<Challenge> {
    return ChallengeRepository.deleteChallenge(id);
  }
}