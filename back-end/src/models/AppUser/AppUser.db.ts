import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import { userFive, userFour, userOne, userThree, userTwo } from "../../database/data";

import AppUser, { Hobbies } from "./AppUser.entity";
import { randomBytes } from "crypto";

export default class AppUserDb {
  protected static repository: Repository<AppUser>;
  static async initializeRepository() {
    this.repository = await getRepository(AppUser);
  }

  protected static saveUser(user: AppUser): Promise<AppUser> {
    return this.repository.save(user);
  }

  static findByEmail(
    email: string
  ): Promise<AppUser | null> {
    return this.repository.findOneBy({ email });
  }

  static async clearRepository(): Promise<void> {
    this.repository.delete({});
  }

  static async initializeUsers(): Promise<void> {
    await this.clearRepository();

    await this.repository.save([userOne, userTwo, userThree, userFour, userFive])
  }

  static async createResetPasswordTokenById (_id:string)  {
    const user = await this.repository.findOneBy({ id :_id })
    
    if(!user) {
      throw Error("No Existing User matching id")
    } else {
      const newToken = randomBytes(16).toString("hex")
      
      user.resetPasswordToken = newToken

      return this.repository.save(user)
    } 
  }

  static async generateResetTokenEndDate(_id:string) {
    const user = await this.repository.findOneBy({ id: _id })

    if(!user) {
      throw Error("No Existing User matching id")
    }
      user.resetTokenCreationDate = new Date()

      this.repository.save(user)
    
  }


  static async getUserByResetToken (_token:string) {
    const user = await this.repository.findOneBy({resetPasswordToken:_token})

    if(!user){
      throw Error("No Existing User matching this Reset Password Token")

    } else {
      return user
    }

  }
}
