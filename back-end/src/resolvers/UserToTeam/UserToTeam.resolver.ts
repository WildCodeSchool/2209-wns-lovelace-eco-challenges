import { Query, Resolver } from "type-graphql";
import UserToTeam from "../../models/UserToTeam/UserToTeam.entity";
import UserToTeamRepository from "../../models/UserToTeam/UserToTeam.repository";

@Resolver(UserToTeam)
export default class UserToTeamResolver {
  @Query(() => [UserToTeam])
  userToTeams(): Promise<UserToTeam[]> {
    return UserToTeamRepository.getUserToTeams();
  }
}