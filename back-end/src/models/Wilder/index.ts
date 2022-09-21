import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  Repository,
} from "typeorm";
import { getWilderRepository } from "../../database/utils";
import School from "../School";
import Skill from "../Skill";

@Entity()
export default class Wilder {
  constructor(
    firstName: string,
    lastName: string,
    school?: School,
    skills?: Skill[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    if (school) {
      this.school = school;
    }
    if (skills) {
      this.skills = skills;
    }
  }

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @ManyToOne(() => School, (school) => school.wilders, { eager: true })
  school: School;

  @ManyToMany(() => Skill, { eager: true })
  @JoinTable()
  skills: Skill[];

  private static repository: Repository<Wilder>;
  static async initializeRepository() {
    this.repository = await getWilderRepository();
  }

  static async clearRepository(): Promise<void> {
    this.repository.clear();
  }

  static async initializeWilders(): Promise<void> {
    await this.clearRepository();
    const lyonSchool = (await School.getSchoolByName("Lyon")) as School;
    const javaScriptSkill = (await Skill.getSkillByName("JavaScript")) as Skill;
    const phpSkill = (await Skill.getSkillByName("PHP")) as Skill;

    const jean = new Wilder("Jean", "Wilder", lyonSchool, [javaScriptSkill]);
    const jeanne = new Wilder("Jeanne", "Wilder", lyonSchool, [
      javaScriptSkill,
      phpSkill,
    ]);

    await this.repository.save([jean, jeanne]);
  }

  static async getWilders(): Promise<Wilder[]> {
    return this.repository.find();
  }

  static async createWilder(
    firstName: string,
    lastName: string
  ): Promise<Wilder> {
    const newWilder = this.repository.create({ firstName, lastName });
    await this.repository.save(newWilder);
    return newWilder;
  }

  static async updateWilder(
    id: string,
    firstName: string,
    lastName: string
  ): Promise<
    {
      id: string;
      firstName: string;
      lastName: string;
    } & Wilder
  > {
    const existingWilder = await this.repository.findOneBy({ id });
    if (!existingWilder) {
      throw Error("No existing Wilder matching ID.");
    }
    return this.repository.save({
      id,
      firstName,
      lastName,
    });
  }

  static async deleteWilder(id: string): Promise<Wilder> {
    const existingWilder = await this.repository.findOneBy({ id });
    if (!existingWilder) {
      throw Error("No existing Wilder matching ID.");
    }
    return this.repository.remove(existingWilder);
  }

  static async addSkillToWilder(
    wilderId: string,
    skillId: string
  ): Promise<Wilder> {
    const wilder = await this.repository.findOneBy({ id: wilderId });
    if (!wilder) {
      throw Error("No existing Wilder matching ID.");
    }
    const skill = await Skill.getSkillById(skillId);
    if (!skill) {
      throw Error("No existing skill matching ID.");
    }
    wilder.skills = [...wilder.skills, skill];
    return this.repository.save(wilder);
  }
}
