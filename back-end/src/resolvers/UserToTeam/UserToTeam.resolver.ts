import { Args, Mutation, Query, Resolver } from "type-graphql";
import UserToTeam from "../../models/UserToTeam/UserToTeam.entity";
import UserToTeamRepository from "../../models/UserToTeam/UserToTeam.repository";
import { CreateUserToTeamArgs } from "./UserToTeam.input";

@Resolver(UserToTeam)
export default class UserToTeamResolver {
  @Query(() => [UserToTeam])
  userToTeams(): Promise<UserToTeam[]> {
    return UserToTeamRepository.getUserToTeams();
  }

  @Mutation(() => UserToTeam)
  createUserToTeam(
    @Args() { 
      teamId, 
      userId, 
      userRole,
      score, 
      disabled,
      invitation
    }: CreateUserToTeamArgs
  ): Promise<UserToTeam> {
    return UserToTeamRepository.createUserToTeam(
      teamId, 
      userId, 
      userRole,
      score, 
      disabled,
      invitation
    )
  }
}