import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import AppUser from "../AppUser/AppUser.entity";
import Team from "../Team/Team.entity";

export enum UserRole {
  ADMIN = "admin", 
  PARTICIPANT = "participant",
}

@Entity()
@ObjectType()
export default class UserTeam {
  constructor(
    team: Team,
    user: AppUser,
    role: UserRole, 
    score: number, 
    disabled : boolean,
  ) {
    this.team = team;
    this.user = user;
    this.role = role; 
    this.score = score; 
    this.disabled = disabled; 
  }

  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @ManyToOne(() => Team, (team) => team.userTeams, { eager: true })
  @Field(()=> [Team])
  team: Team; 

  @ManyToOne(() => AppUser, (user) => user.userTeams, { eager: true })
  @Field(() => [AppUser])
  user: AppUser; 

  @Column("enum", { enum: UserRole })
  @Field()
  role: UserRole; 

  @Column("int", { default:0 })
  @Field({ nullable: true })
  score: number; 

  @Column("boolean")
  @Field()
  disabled: boolean; 
}