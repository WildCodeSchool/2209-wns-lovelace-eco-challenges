import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import {
  Column,
  Entity,
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
registerEnumType(UserRole, {
  name: "UserRole",
});

@Entity()
@ObjectType()
export default class UserToTeam {
  constructor(
    team: Team,
    user: AppUser,
    userRole: UserRole, 
    score: number, 
    disabled : boolean,
    invitation?: Invitation,
  ) {
    this.team = team;
    this.user = user;
    this.userRole = userRole; 
    this.score = score; 
    this.disabled = disabled; 
    if (invitation) {
    this.invitation = invitation;
    }
  }

  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @ManyToOne(() => Team, (team) => team.userToTeams, { eager: true, onDelete: "CASCADE", onUpdate: "CASCADE" })
  @Field(()=> Team)
  team: Team; 

  @ManyToOne(() => AppUser, (user) => user.userToTeams, { eager: true, onDelete: "CASCADE", onUpdate: "CASCADE" })
  @Field(() => AppUser)
  user: AppUser; 

  @Column({
    type: "enum",
    enum: UserRole
  })
  @Field(_type => UserRole)
  userRole: UserRole; 

  @Column("int", { default:0 })
  @Field()
  score: number; 

  @Column("boolean", {default: false})
  @Field()
  disabled: boolean; 

  @ManyToOne(() => Invitation, (invitation) => invitation.userToTeams, { eager: true, onDelete: "CASCADE", onUpdate: "CASCADE" })
  @Field(() => Invitation, { nullable: true })
  invitation: Invitation;
}