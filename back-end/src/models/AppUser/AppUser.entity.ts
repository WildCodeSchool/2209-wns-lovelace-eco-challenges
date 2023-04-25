import { IsEmail } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany } from "typeorm";
import UserToTeam from "../UserToTeam/UserToTeam.entity";

@Entity()
@ObjectType()
@Index(['nickname'], { unique: true,  where: `"isVerified"=true` })
export default class AppUser {
  constructor(
    firstName: string,
    lastName: string,
    nickname: string,
    email: string,
    city:string,
    country:string,
    hashedPassword: string,
    isVerified?: boolean, 
    userToTeams?: UserToTeam[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickname = nickname;
    this.email = email;
    this.hashedPassword = hashedPassword;
    this.city = city;
    this.country = country;
    if (isVerified) {
      this.isVerified = isVerified;
    }
    if (userToTeams) {
      this.userToTeams = userToTeams;
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

  @Field()
  @Column("boolean", {default:true})
  isVerified: boolean;

  @OneToMany(() => UserToTeam, (userToTeam) => userToTeam.user)
  @Field(() => [UserToTeam], { nullable: true })
  userToTeams: UserToTeam[]; 
}
