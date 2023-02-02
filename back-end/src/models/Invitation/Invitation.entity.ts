import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import UserToTeam from "../UserToTeam/UserToTeam.entity";


export enum InvitationStatus {
  PENDING = "pending",
  ACCEPTED = "accepted", 
  DENIED ="denied",
}
registerEnumType(InvitationStatus, {
  name: "InvitationStatus",
});

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
  @Field(_type => InvitationStatus)
  status: InvitationStatus; 

  @CreateDateColumn({ type: 'date' })
  @Field()
  createdAt: Date; 

  @OneToMany(() => UserToTeam, (userToTeam) => userToTeam.invitation)
  @Field(() => [UserToTeam])
  userToTeams: UserToTeam[]; 
}
