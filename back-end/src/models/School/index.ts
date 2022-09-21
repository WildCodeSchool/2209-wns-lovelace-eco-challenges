import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  Repository,
} from "typeorm";
import { getSchoolRepository } from "../../database/utils";
import Wilder from "../Wilder";

@Entity()
export default class School {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Index({ unique: true })
  schoolName: string;

  @OneToMany(() => Wilder, (wilder) => wilder.school)
  wilders: Wilder[];

  private static repository: Repository<School>;
  static async initializeRepository() {
    this.repository = await getSchoolRepository();
  }

  static async clearRepository(): Promise<void> {
    this.repository.clear();
  }

  static async initializeSchools(): Promise<void> {
    await Wilder.clearRepository();
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
