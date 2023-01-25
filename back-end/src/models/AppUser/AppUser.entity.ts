import { IsEmail } from "class-validator";
// import { count } from "console";
import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToMany, OneToMany } from "typeorm";
import UserTeam from "../UserTeam/UserTeam.entity";

@Entity()
@ObjectType()
export default class AppUser {
  constructor(
    firstName: string,
    lastName: string,
    nickname: string,
    email: string,
    city:string,
    country:string,
    hashedPassword: string,
    userTeams?: UserTeam[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickname = nickname;
    this.email = email;
    this.hashedPassword = hashedPassword;
    this.city = city;
    this.country = country;
    if (userTeams) {
      this.userTeams = userTeams;
    }
  }

  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  @Index({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  hashedPassword: string;

  @Field()
  @Column()
  nickname:string;

  @Field()
  @Column("int", {default:0})
  score:number;

  @Field()
  @Column("boolean", {default:false})
  disabled:boolean;

  @Field()
  @Column()
  city:string;

  @Field()
  @Column()
  country:string;

  @OneToMany(() => UserTeam, (userTeam) => userTeam.user)
  @Field(() => [UserTeam])
  userTeams: UserTeam[]; 

}
