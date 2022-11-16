import { ExpressContext } from "apollo-server-express";
import { Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
import AppUser from "../../models/AppUser/AppUser.entity";
import AppUserRepository from "../../models/AppUser/AppUser.repository";
import { SignInArgs, SignUpArgs } from "./AppUser.input";
import { getSessionIdInCookie, setSessionIdInCookie } from "../../http-utils";
import { ERROR_NO_USER_SIGNED_IN } from "../../models/AppUser/error-messages";

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

  @Query(() => AppUser)
  async myProfile(@Ctx() context: ExpressContext): Promise<AppUser> {
    const sessionId = getSessionIdInCookie(context);
    if (!sessionId) {
      throw Error(ERROR_NO_USER_SIGNED_IN);
    }
    return AppUserRepository.findBySessionId(sessionId);
  }
}
