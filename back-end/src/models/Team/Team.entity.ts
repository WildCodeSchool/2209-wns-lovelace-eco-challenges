import { Field, ID, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import UserToTeam from "../UserToTeam/UserToTeam.entity";
import ChallengeToTeam from "../ChallengeToTeam/ChallengeToTeam.entity";


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
    challengeToTeams?: ChallengeToTeam[]
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
    if (challengeToTeams) {
      this.challengeToTeams = challengeToTeams;
    }
  }

  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id: string;

  @Column({ 
    type: "varchar", 
    length: 45,
    transformer: {
      to(value : string){
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
      }, 
      from(value: string) {
        return value;
      }
    } 
  })
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
  img: string; 

  @Column("boolean")
  @Field()
  isPublic: boolean; 

  @OneToMany(() => UserToTeam, (userToTeam) => userToTeam.team)
  @Field(() => [UserToTeam], { nullable: true })
  userToTeams: UserToTeam[]; 

  @OneToMany(() => ChallengeToTeam, (challengeToTeam) => challengeToTeam.team)
  @Field(() => [ChallengeToTeam], { nullable: true })
  challengeToTeams: ChallengeToTeam[]; 
}
