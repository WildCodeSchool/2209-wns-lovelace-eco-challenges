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
import UserTeam from "../UserTeam/UserTeam.entity";


@Entity()
@ObjectType()
export default class Team {
  constructor(
    teamName: string,
    city: string,
    country: string, 
    isPublic : boolean,
    img?: string, 
    userTeams?: UserTeam[],
    challenges?: Challenge[]
  ) {
    this.teamName = teamName;
    this.city = city;
    this.country = country;  
    this.isPublic = isPublic; 
    if (img) {
      this.img = img; 
    };
    if (userTeams) {
      this.userTeams = userTeams;
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

  @OneToMany(() => UserTeam, (userTeam) => userTeam.team)
  @Field(() => [UserTeam])
  userTeams: UserTeam[]; 

  @ManyToMany(() => Challenge, { eager: true })
  @Field(() => [Challenge])
  @JoinTable()
  challenges: Challenge[];
}
