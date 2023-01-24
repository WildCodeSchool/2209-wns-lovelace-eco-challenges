import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import AppUser from "../AppUser/AppUser.entity";
import UserTeam from "../UserTeam/UserTeam.entity";


@Entity()
@ObjectType()
export default class Team {
  constructor(
    teamName: string,
    city: string,
    country: string, 
    img: string, 
    isPublic : boolean,
    userTeams?: UserTeam[]
  ) {
    this.teamName = teamName;
    this.city = city;
    this.country = country; 
    this.img = img; 
    this.isPublic = isPublic; 
    if (userTeams) {
      this.userTeams = userTeams;
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
  @Field({ nullable: true })
  city: string; 

  @Column("varchar", { length: 100 })
  @Field({ nullable: true })
  country: string; 

  @Column("varchar", { nullable: true })
  @Field({ nullable: true })
  img: string; 

  @Column("boolean")
  @Field()
  isPublic: boolean; 

  @OneToMany(() => UserTeam, (userTeam) => userTeam.team)
  @Field(() => [UserTeam])
  userTeams: UserTeam[]; 

}
