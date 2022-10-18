import { Args, Mutation, Query, Resolver } from "type-graphql";

import Wilder from "../models/Wilder/Wilder.entity";
import WilderRepository from "../models/Wilder/Wilder.repository";
import { CreateWilderArgs } from "./Wilder.input";

@Resolver(Wilder)
export default class WilderResolver {
  @Query(() => [Wilder])
  wilders(): Promise<Wilder[]> {
    return WilderRepository.getWilders();
  }

  @Mutation(() => Wilder)
  createWilder(
    @Args() { firstName, lastName }: CreateWilderArgs
  ): Promise<Wilder> {
    return WilderRepository.createWilder(firstName, lastName);
  }

  // TODO :
  //   - updateWilder
  //   - deleteWilder
  //   - addSkill
}
