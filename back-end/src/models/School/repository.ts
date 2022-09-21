import { Repository } from "typeorm";
import School from ".";
import { getSchoolRepository } from "../../database/utils";
import WilderRepository from "../Wilder/repository";

export default class SchoolRepository extends School {
  private static repository: Repository<School>;
  static async initializeRepository() {
    this.repository = await getSchoolRepository();
  }

  static async clearRepository(): Promise<void> {
    this.repository.clear();
  }

  static async initializeSchools(): Promise<void> {
    await WilderRepository.clearRepository();
    await this.repository.clear();
    await this.repository.save({
      schoolName: "Lyon",
    });
    await this.repository.save({
      schoolName: "Brest",
    });
  }

  static async getSchoolByName(name: string): Promise<School | null> {
    return this.repository.findOneBy({ schoolName: name });
  }
}
