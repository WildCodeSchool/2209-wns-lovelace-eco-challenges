import AppUserDb from "./AppUser.db";
import AppUser from "./AppUser.entity";

import { hashSync, compareSync } from "bcryptjs";
import SessionRepository from "./Session.repository";

export default class AppUserRepository extends AppUserDb {
  static createUser(
    firstName: string,
    lastName: string,
    emailAddress: string,
    password: string
  ): Promise<AppUser> {
    const user = new AppUser(
      firstName,
      lastName,
      emailAddress,
      hashSync(password)
    );
    return this.saveUser(user);
  }

  static async signIn(
    emailAddress: string,
    password: string
  ): Promise<AppUser> {
    const user = await this.findByEmailAddress(emailAddress);

    if (!user || !compareSync(password, user.hashedPassword)) {
      throw new Error("Identifiants incorrects.");
    }
    await SessionRepository.createSession(user);
    return user;
  }
}
