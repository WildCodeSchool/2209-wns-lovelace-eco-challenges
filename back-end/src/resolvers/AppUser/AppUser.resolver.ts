import { ExpressContext } from "apollo-server-express";
import { Args, Ctx, Mutation, Resolver } from "type-graphql";
import AppUser from "../../models/AppUser/AppUser.entity";
import AppUserRepository from "../../models/AppUser/AppUser.repository";
import { SignInArgs, SignUpArgs } from "./AppUser.input";
import { setSessionIdInCookie } from "../../http-utils";

@Resolver(AppUser)
export default class AppUserResolver {
  @Mutation(() => AppUser)
  signUp(
    @Args() { firstName, lastName, emailAddress, password }: SignUpArgs
  ): Promise<AppUser> {
    return AppUserRepository.createUser(
      firstName,
      lastName,
      emailAddress,
      password
    );
  }

  @Mutation(() => AppUser)
  async signIn(
    @Args() { emailAddress, password }: SignInArgs,
    @Ctx() context: ExpressContext
  ): Promise<AppUser> {
    const { user, session } = await AppUserRepository.signIn(
      emailAddress,
      password
    );
    setSessionIdInCookie(context, session.id);
    return user;
  }
}
