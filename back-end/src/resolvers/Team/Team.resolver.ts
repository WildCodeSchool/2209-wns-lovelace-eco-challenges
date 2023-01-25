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

  @Query(() => [Team])
  teamsByCity(@Arg("city") city : string): Promise<Team[] | null> {
    return TeamRepository.getTeamByCity(city); 
  }

  @Query(() => [Team])
  teamsByCountry(@Arg("country") country : string): Promise<Team[] | null> {
    return TeamRepository.getTeamByCountry(country); 
  }

  @Mutation(() => Team)
  createTeam(
    @Args() { 
      teamName, 
      city, 
      country,
      isPublic, 
      img, 
    }: CreateTeamArgs
  ): Promise<Team> {
    return TeamRepository.createTeam(
      teamName, 
      city, 
      country, 
      isPublic, 
      img,
    )
  }

  @Mutation(() => Team)
  updateTeam(
    @Args() { 
      id, 
      teamName, 
      city, 
      country, 
      isPublic,  
      img, 
    }: UpdateTeamArgs
  ): Promise<Team> {
    return TeamRepository.updateTeam(id, teamName, city, country, img, isPublic);
  }

  @Mutation(() => Team)
  deleteTeam(@Arg("id") id: string): Promise<Team> {
    return TeamRepository.deleteTeam(id);
  }
}