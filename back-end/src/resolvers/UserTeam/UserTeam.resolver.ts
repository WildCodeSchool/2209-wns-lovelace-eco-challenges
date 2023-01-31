import { Query, Resolver } from "type-graphql";
import UserTeam from "../../models/UserTeam/UserTeam.entity";
import UserTeamRepository from "../../models/UserTeam/UserTeam.repository";

@Resolver(UserTeam)
export default class UserTeamResolver {
  @Query(() => [UserTeam])
  userTeams(): Promise<UserTeam[]> {
    return UserTeamRepository.getUserTeams();
  }
}