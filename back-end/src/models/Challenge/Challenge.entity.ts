import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import ChallengeToTeam from "../ChallengeToTeam/ChallengeToTeam.entity";

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
    category: Category[],
    startsAt?: Date,
    endAt?: Date, 
    img?: string, 
    challengeToTeams?: ChallengeToTeam[]
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
    if (challengeToTeams) {
      this.challengeToTeams = challengeToTeams;
    }
  }

  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column({ 
    type: "varchar",
    length: 100, 
    transformer: {
      to(value : string){
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      }, 
      from(value: string) {
        return value;
      }
    } 
  })
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

  @OneToMany(() => ChallengeToTeam, (challengeToTeam) => challengeToTeam.challenge)
  @Field(() => [ChallengeToTeam], { nullable: true })
  challengeToTeams: ChallengeToTeam[]; 
  
}

