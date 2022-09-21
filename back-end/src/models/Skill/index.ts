import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
  Repository,
} from "typeorm";
import { getSkillRepository } from "../../database/utils";
import Wilder from "../Wilder";

@Entity()
export default class Skill {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Index({ unique: true })
  skillName: string;

  @ManyToMany(() => Wilder, (wilder) => wilder.skills)
  wilders: Wilder[];

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
