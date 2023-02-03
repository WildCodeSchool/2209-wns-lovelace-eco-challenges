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

  static async initializeUsers(): Promise<void> {
    await AppUserRepository.clearRepository(); 

    const userOne = new AppUser("Christopher", "Nafrere", "User1", "user1@gmail.com", "Paris", "France", "792fedf21730fd3099dfcdccaada2e38",undefined)
    const userTwo = new AppUser("Jules", "Charles", "User2", "user2@gmail.com", "Paris", "France", "62dee9386ca2fda33380c1bca1026775",undefined)
    const userThree = new AppUser("Marco", "Da Silva", "User3", "user3@gmail.com", "Bordeaux", "France", "a5194a644366b58bb20f78c48508d22e",undefined)
    const userFour = new AppUser("Bénédicte", "Laurain", "User4", "user4@gmail.com", "Tours", "France", "fa2a3c3f183dba350b4bddafa1cf8524",undefined)
    const userFive = new AppUser("Cinquième Elément", "Le", "User5", "user5@gmail.com", "Barcelone", "Espagne", "eae52589ff2a43856e1940793161eecc",undefined)

    await this.repository.save([userOne, userTwo, userThree, userFour, userFive])
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

  static async getUserByNickname(userName: string): Promise<AppUser | null> {
    return this.repository.findOne({ 
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
  }

  static async getUserById(id: string): Promise<AppUser | null> {
    return this.repository.findOne({ 
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
  }
}
