import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import Team from "../../models/Team/Team.entity";
import TeamRepository from "../../models/Team/Team.repository";
import { CreateTeamArgs, UpdateTeamArgs } from "./Team.input";

@Resolver(Team)
export default class TeamResolver {
  @Query(() => [Team])
  teams(): Promise<Team[]> {
    return TeamRepository.getTeams(); 
  }

  @Mutation(() => Team)
  createTeam(
    @Args() { 
      teamName, 
      city, 
      country, 
      img, 
      isPublic
    }: CreateTeamArgs
  ): Promise<Team> {
    return TeamRepository.createTeam(
      teamName, 
      city, 
      country, 
      img, 
      isPublic 
    )
  }

  @Mutation(() => Team)
  updateTeam(
    @Args() { 
      id, 
      teamName, 
      city, 
      country, 
      img, 
      isPublic  
    }: UpdateTeamArgs
  ): Promise<Team> {
    return TeamRepository.updateTeam(id, teamName, city, country, img, isPublic);
  }

  @Mutation(() => Team)
  deleteTeam(@Arg("id") id: string): Promise<Team> {
    return TeamRepository.deleteTeam(id);
  }
}