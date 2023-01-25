import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Team from "../Team/Team.entity";
import UserTeam from "../UserTeam/UserTeam.entity";

export enum Level {
  EASY = "easy",
  MODERATE = "moderate",
  CHALLENGING = "challenging",
  SUPERGREEN = "supergreen"
}

export enum Categories {
  CARPOOLING = "carpooling",
  WASTEREDUCTION = "waste reduction", 
  LESSWATER = "less water",
  LESSELECTRICITY = "less electricity", 
  LESSMEAT = "less meat", 
  PROTECTSNATURE = "protects nature",
  SELFSUFFICIENCY = "self-sufficiency" 
}

@Entity()
@ObjectType()
export default class Challenge {
  constructor(
    challengeName: string,
    startsAt: Date,
    endAt: Date, 
    level : Level,
    description: string,
    category: Categories,
    img?: string, 
    teams?: Team[]
  ) {
    this.challengeName = challengeName;
    this.startsAt = startsAt;
    this.endAt = endAt;  
    this.level = level; 
    this.description = description;
    this.category = category;
    if (img) {
      this.img = img; 
    };
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

  @Column("timestamptz")
  @Field()
  startsAt: Date; 

  @Column("timestamptz")
  @Field()
  endAt: Date; 

  @Column({
    type: 'enum',
    enum: Level,
  })
  @Field()
  level:Level;  

  @Column("varchar", { length: 500 })
  @Field()
  description: string; 

  @Column({
    type: 'enum',
    enum: Categories,
  })
  @Field()
  category: Categories;

  @Column("varchar", { nullable: true })
  @Field({ nullable: true })
  img?: string; 

  @ManyToMany(() => Team, (team) => team.challenges)
  @Field(() => [Team])
  teams: Team[];
}