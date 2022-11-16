import { Args, Mutation, Resolver } from "type-graphql";
import AppUser from "../../models/AppUser/AppUser.entity";
import AppUserRepository from "../../models/AppUser/AppUser.repository";
import { SignInArgs, SignUpArgs } from "./AppUser.input";

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
  signIn(@Args() { emailAddress, password }: SignInArgs): Promise<AppUser> {
    return AppUserRepository.signIn(emailAddress, password);
  }
}
