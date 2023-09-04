import { Arg, Args, Authorized, ID, Mutation, Query, Resolver } from "type-graphql";
import Team from "../../models/Team/Team.entity";
import TeamRepository from "../../models/Team/Team.repository";
import { Pagination } from "../InputArgsForAll";
import { CreateTeamArgs, UpdateTeamArgs } from "./Team.input";


@Resolver(Team)
export default class TeamResolver {
  @Query(() => [Team])
  teams(@Args() { 
    itemsByPage, 
    pageNumber 
  } : Pagination): Promise<Team[]> {
    return TeamRepository.getTeams(itemsByPage, pageNumber); 
  }

  @Query(() => [Team])
  teamsByCity(
    @Arg("city") city : string,
    @Args() { itemsByPage, pageNumber } : Pagination
    ): Promise<Team[]> {
    return TeamRepository.getTeamsByCity(city, itemsByPage, pageNumber); 
  }

  @Query(() => [Team])
  teamsByCountry(
    @Arg("country") country : string,
    @Args() { itemsByPage, pageNumber } : Pagination
    ): Promise<Team[]> {
    return TeamRepository.getTeamsByCountry(country, itemsByPage, pageNumber); 
  }

  @Query(() => Team)
  teamByName(@Arg("teamName") teamName : string): Promise<Team> {
    return TeamRepository.getTeamByName(teamName); 
  }

  @Query(() => Team)
  teamById(@Arg("id") id : string): Promise<Team> {
    return TeamRepository.getTeamById(id); 
  }

  @Authorized()
  @Mutation(() => Team)
  createTeam(
    @Args() { 
      teamName, 
      city, 
      country,
      isPublic,
      img 
    }: CreateTeamArgs,
  ): Promise<Team> {
    return TeamRepository.createTeam(
      teamName, 
      city, 
      country, 
      isPublic, 
      img
    )
  }

  @Authorized()
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
    return TeamRepository.updateTeam(id, { teamName, city, country, img, isPublic});
  }

  @Authorized()
  @Mutation(() => Team)
  deleteTeam(@Arg("id") id: string): Promise<Team> {
    return TeamRepository.deleteTeam(id);
  }
}
