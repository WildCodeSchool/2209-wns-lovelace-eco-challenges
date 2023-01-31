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
import Invitation from "../Invitation/Invitation.entity";

export enum UserRole {
  ADMIN = "admin", 
  PLAYER = "player",
}

@Entity()
@ObjectType()
export default class UserTeam {
  constructor(
    team: Team,
    user: AppUser,
    userRole: UserRole, 
    score: number, 
    disabled : boolean,
    invitation: Invitation,
  ) {
    this.team = team;
    this.user = user;
    this.userRole = userRole; 
    this.score = score; 
    this.disabled = disabled; 
    this.invitation = invitation;
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

  @ManyToOne(() => Invitation, (invitation) => invitation.userTeams, { eager: true })
  @Field(() => [Invitation!]!)
  invitation: Invitation;

  @Column("enum", { enum: UserRole })
  @Field()
  userRole: UserRole; 

  @Column("int", { default:0 })
  @Field({ nullable: true })
  score: number; 

  @Column("boolean")
  @Field()
  disabled: boolean; 
}