import { Field, ID, ObjectType } from "type-graphql";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import UserTeam from "../UserTeam/UserTeam.entity";


export enum InvitationStatus {
  PENDING = "pending",
  ACCEPTED = "accepted", 
  DENIED ="denied",
}

@Entity()
@ObjectType()
export default class Invitation {
  constructor(
    status: InvitationStatus, 
    createdAt: Date,
  ){
    this.status = status; 
    this.createdAt = createdAt;
  }

  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string; 

  @Column({
    type: 'enum',
    enum: InvitationStatus,
    default: InvitationStatus.PENDING
  })
  @Field()
  status: InvitationStatus; 

  @CreateDateColumn({type: 'date'})
  @Field()
  createdAt: Date; 

  @OneToMany(() => UserTeam, (userTeam) => userTeam.invitation)
  @Field(() => UserTeam)
  userTeams: UserTeam; 
}
