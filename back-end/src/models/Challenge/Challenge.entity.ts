import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Team from "../Team/Team.entity";

export enum Level {
  EASY = "Facile",
  MODERATE = "Intermédiaire",
  CHALLENGING = "Challengeant",
  SUPERGREEN = "Supergreen"
}

export enum Category {
  CARPOOLING = "Covoiturage",
  WASTE = "Déchets", 
  WATER = "Eau",
  ELECTRICITY = "Electricité", 
  MEAT = "Viande", 
  PROTECTSNATURE = "Protection Nature",
  SELFSUFFICIENCY = "Autosuffisance",
  LESS = "Réduction"
}

registerEnumType(Category, {
  name: "Category",
});
registerEnumType(Level, {
  name: "Level",
});


@Entity()
@ObjectType()
export default class Challenge {
  constructor(
    challengeName: string,
    level : Level,
    description: string,
    category: [Category],
    startsAt?: Date,
    endAt?: Date, 
    img?: string, 
    teams?: Team[]
  ) {
    this.challengeName = challengeName;
    this.level = level; 
    this.description = description;
    this.category = category;
    if (startsAt) {
      this.startsAt = startsAt;
    }
    if (endAt) {
      this.endAt = endAt; 
    }
    if (img) {
      this.img = img; 
    }
    if (teams) {
      this.teams = teams;
    }
  }

  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column("varchar", { length: 100 })
  @Index({ unique: true })
  @Field()
  challengeName: string;

  @Column("timestamptz", { nullable: true })
  @Field({ nullable: true })
  startsAt?: Date; 

  @Column("timestamptz", { nullable: true })
  @Field({ nullable: true })
  endAt?: Date; 

  @Column({
    type: 'enum',
    enum: Level,
  })
  @Field(_type => Level)
  level:Level;  

  @Column("varchar", { length: 500 })
  @Field()
  description: string; 

  @Column({
    type: "enum",
    enum: Category,
    array: true,
  })
  @Field(_type => [Category])
  category: Category[];

  @Column("varchar", { nullable: true })
  @Field({ nullable: true })
  img: string; 

  @ManyToMany(() => Team, (team) => team.challenges, {onDelete: "CASCADE", onUpdate: "CASCADE"})
  @Field(() => [Team], { nullable: true })
  teams: Team[];
}

