import AppUserDb from "./AppUser.db";
import AppUser, { Hobbies } from "./AppUser.entity";

import { hashSync, compareSync } from "bcryptjs";
import SessionRepository from "./Session.repository";
import Session from "./Session.entity";
import { ILike } from "typeorm";
import { createTransport } from "nodemailer"

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
            challengeToTeams : true
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
            challengeToTeams : true
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
            challengeToTeams : true
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
    const newUser = this.repository.create({
      firstName : "",
      lastName : "", 
      nickname : "", 
      email : email, 
      city : "",
      country: "", 
      hashedPassword: "",
      isVerified: false
    })

    await this.repository.save(newUser);
    return newUser;
  }

  static async updateAppUser(
    id: string, 
    firstName?: string,
    lastName?: string,
    nickname?:string,
    email?: string,
    city?:string,
    country?:string,
    img?: string,
    hobbies?: Hobbies[],
  ): Promise<
    {
    id: string, 
    firstName?: string,
    lastName?: string,
    nickname?:string,
    email?: string,
    city?:string,
    country?:string,
    img?: string,
    hobbies?: Hobbies[]
    } & AppUser
  > {
    const existingAppUser = await this.repository.findOneBy({ id }); 
    if (!existingAppUser) {
      throw Error("No existing AppUser matching ID.");
    }
    return this.repository.save({
      id, 
      firstName,
      lastName,
      nickname,
      email,
      city,
      country,
      img,
      hobbies
    });
  }
  static async askResetPassword( email:string ) {
    const user = await this.getUserByEmailThrow(email)

    if(!user) {
      throw Error("No Existing User matching email")
    } else {

      const finalUser = await this.createResetPasswordTokenById(user.id)
      await this.generateResetTokenEndDate(finalUser.id)
      
      const resetUrl = `http://localhost:3000/forget-password/${finalUser.resetPasswordToken}`

      const transporter = createTransport({
        service:"gmail",
        auth:{
          user:"eco.playground23@gmail.com",
          pass:"zropdgemelzcdqzo"
        }
      })

      const mailOptions = {
        from:"eco.playground23@gmail.com",
        to:finalUser.email,
        subject:"no-reply: Changement de mot de passe",
        text: `Bonjour ${finalUser.firstName} ${finalUser.lastName},\nNous venons de recevoir une requête de changement de mot de passe sur le site Eco Playground, si il s'agit bien de vous clicker sur le lien ci-dessous :\n${resetUrl}\n\nCe lien sera désactivé dans 15 minute `
      }
      transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
          console.log(error)
        } else {
          console.log("Email sent:" + info.response);
        }
      }) 

      return finalUser
    }
  }

  static async changePassword ( userId:string, newPassword:string ) {
    const user = await this.getUserByResetToken(userId);

    if(!user) {
      throw Error("No Existing User matching this Reset Password Token")
    } else {
      const current = new Date()

      if(!user.resetTokenCreationDate) {
        throw Error("The token is not valid anymore")
        
      } else {
        
        if((user.resetTokenCreationDate.getTime() - current.getTime()) / 1000 / 60 > 15 ) {
          user.resetPasswordToken = undefined
          user.resetTokenCreationDate = undefined

          throw Error("The token is not valid anymore")
        } else {
          user.hashedPassword = hashSync(newPassword, 10)

          user.resetPasswordToken = undefined
          user.resetTokenCreationDate = undefined

          return this.repository.save(user)
        }     
      }
    }
  }
}
