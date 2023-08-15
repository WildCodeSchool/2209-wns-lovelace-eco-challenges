import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import AppUser from "../../models/AppUser/AppUser.entity";
import AppUserRepository from "../../models/AppUser/AppUser.repository";
import { ChangePasswordArgs, SignInArgs, SignUpArgs, askChangePasswordArgs, UpdateAppUserArgs } from "./AppUser.input";
import { setSessionIdInCookie } from "../../http-utils";
import { GlobalContext } from "../..";
import { Email } from "../InputArgsForAll";

@Resolver(AppUser)
export default class AppUserResolver {
  @Mutation(() => AppUser)
  signUp(
    @Args() { firstName, lastName, nickname, email, city, desc, age, country, password }: SignUpArgs
  ): Promise<AppUser> {
    return AppUserRepository.createUser(
      firstName,
      lastName,
      nickname,
      email,
      city,
      desc,
      age,
      country,
      password
    );
  }

  @Mutation(() => AppUser)
  async signIn(
    @Args() { email, password }: SignInArgs,
    @Ctx() context: GlobalContext
  ): Promise<AppUser> {
    const { user, session } = await AppUserRepository.signIn(
      email,
      password
    );
    setSessionIdInCookie(context, session.id);
    return user;
  }

  @Mutation(() => AppUser)
  async changePassword(@Args() { userId, newPassword }: ChangePasswordArgs) {
    return AppUserRepository.changePassword(userId, newPassword)
  }

  @Mutation(() => String)
  async askChangePassword(@Args() { email }: askChangePasswordArgs):Promise<string>{
    await AppUserRepository.askResetPassword(email)
    return  `Un email de récupération a bien été envoyé à l'adresse : ${email}`
  }
  
  @Authorized()
  @Query(() => AppUser)
  async myProfile(@Ctx() context: GlobalContext): Promise<AppUser> {
    return context.user as AppUser;
  }

  @Query(() => AppUser)
  userByNickname(@Arg("nickname") nickname: string): Promise<AppUser> {
    return AppUserRepository.getUserByNickname(nickname);
  }

  @Query(() => AppUser)
  userById(@Arg("id") id: string): Promise<AppUser> {
    return AppUserRepository.getUserById(id);
  }

  @Query(() => AppUser)
  userByEmail(@Args() { email }: Email): Promise<AppUser> {
    return AppUserRepository.getUserByEmailThrow(email);
  }

  @Mutation(() => AppUser)
  updateAppUser(
    @Args() {
      id,
      firstName,
      lastName,
      nickname,
      email,
      city,
      desc,
      age,
      country,
      img,
      hobbies
    }: UpdateAppUserArgs
  ): Promise<AppUser> {
    return AppUserRepository.updateAppUser(id, { firstName, lastName, nickname, email, desc, city, age, country, img, hobbies});
  }
}
