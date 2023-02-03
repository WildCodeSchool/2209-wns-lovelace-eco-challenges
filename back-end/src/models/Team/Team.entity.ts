import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Challenge from "../Challenge/Challenge.entity";
import UserToTeam from "../UserToTeam/UserToTeam.entity";


@Entity()
@ObjectType()
export default class Team {
  constructor(
    teamName: string,
    city: string,
    country: string, 
    isPublic : boolean,
    img?: string, 
    userToTeams?: UserToTeam[],
    challenges?: Challenge[]
  ) {
    this.teamName = teamName;
    this.city = city;
    this.country = country;  
    this.isPublic = isPublic; 
    if (img) {
      this.img = img; 
    };
    if (userToTeams) {
      this.userToTeams = userToTeams;
    };
    if (challenges) {
      this.challenges = challenges;
    }
  }

  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column("varchar", { length: 45 })
  @Index({ unique: true })
  @Field()
  teamName: string;

  @Column("varchar", { length: 100 })
  @Field()
  city: string; 

  @Column("varchar", { length: 100 })
  @Field()
  country: string; 

  @Column("varchar", { nullable: true })
  @Field({ nullable: true })
  img?: string; 

  @Column("boolean")
  @Field()
  isPublic: boolean; 

  @OneToMany(() => UserToTeam, (userToTeam) => userToTeam.team)
  @Field(() => [UserToTeam], { nullable: true })
  userToTeams: UserToTeam[]; 

  @ManyToMany(() => Challenge, (challenge) => challenge.teams, { eager: true })
  @Field(() => [Challenge], { nullable: true })
  @JoinTable()
  challenges: Challenge[];
}
