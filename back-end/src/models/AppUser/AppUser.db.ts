import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import AppUser from "./AppUser.entity";
import { userFive, userFour, userOne, userThree, userTwo } from "../../database/data";


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
}
