import AppUserDb from "./AppUser.db";
import AppUser from "./AppUser.entity";

import { hashSync, compareSync } from "bcryptjs";
import SessionRepository from "./Session.repository";
import Session from "./Session.entity";
import { ILike } from "typeorm";

export const INVALID_CREDENTIALS_ERROR_MESSAGE = "Identifiants incorrects.";

export default class AppUserRepository extends AppUserDb {
  static createUser(
    firstName: string,
    lastName: string,
    nickname:string,
    email: string,
    city:string,
    country:string,
    password: string
  ): Promise<AppUser> {
    const user = new AppUser(
      firstName,
      lastName,
      nickname,
      email,
      city,
      country,
      hashSync(password)
    );
    return this.saveUser(user);
  }

  static async signIn(
    email: string,
    password: string
  ): Promise<{ user: AppUser; session: Session }> {
    const user = await this.findByEmail(email);

    if (!user || !compareSync(password, user.hashedPassword)) {
      throw new Error(INVALID_CREDENTIALS_ERROR_MESSAGE);
    }
    const session = await SessionRepository.createSession(user);
    return { user, session };
  }

  // static async signOut(user: AppUser): Promise<AppUser> {
  // delete session linked to user
  // return user
  // }

  static async findBySessionId(sessionId: string): Promise<AppUser | null> {
    const session = await SessionRepository.findById(sessionId);
    if (!session) {
      return null;
    }
    return session.user;
  }

  static async getUserByNickname(userName: string): Promise<AppUser> {
    const existingUser = await this.repository.findOne({ 
      where: {
        nickname: ILike(`%${userName}%`)
      },
      relations: {
        userToTeams : {
          team : {
            challenges : true
          }
        }
      } 
    });
    if (!existingUser) {
      throw Error("No existing User matching Nickname")
    } 
    return existingUser;
  }

  static async getUserById(id: string): Promise<AppUser> {
    const existingUser = await this.repository.findOne({ 
      where: {
        id 
      }, 
      relations: {
        userToTeams : {
          team : {
            challenges : true
          }
        }
      },
    }); 
    if (!existingUser) {
      throw Error("No existing User matching Id")
    } 
    return existingUser;
  }

  static async getUserByEmailThrow(email: string): Promise<AppUser> {
    const existingUser = await this.repository.findOne({ 
      where: {
        email 
      }, 
      relations: {
        userToTeams : {
          team : {
            challenges : true
          }
        }
      },
    }); 
    if (!existingUser) {
      throw Error("No existing User matching email")
    } 
    return existingUser;
  }

  static async createUserToBeChecked(
    email: string,
  ): Promise<AppUser> {
    const newUser = new AppUser("", "", "", email, "", "", "");
    await this.repository.save(newUser);
    return newUser;
  }
}
