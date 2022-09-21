import { Repository } from "typeorm";
import Skill from ".";
import { getSkillRepository } from "../../database/utils";

export default class SkillRepository extends Skill {
  private static repository: Repository<Skill>;
  static async initializeRepository() {
    this.repository = await getSkillRepository();
  }

  static async clearRepository(): Promise<void> {
    this.repository.clear();
  }

  static async initializeSkills() {
    this.clearRepository();
    await this.repository.save({
      skillName: "PHP",
    });
    await this.repository.save({
      skillName: "JavaScript",
    });
  }

  static async getSkillByName(name: string): Promise<Skill | null> {
    return this.repository.findOneBy({ skillName: name });
  }

  static async getSkillById(id: string): Promise<Skill | null> {
    return this.repository.findOneBy({ id });
  }
}
