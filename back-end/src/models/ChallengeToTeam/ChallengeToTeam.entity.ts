import { Field, ObjectType, ID } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import Team from "../Team/Team.entity";
import Challenge from "../Challenge/Challenge.entity";

@Entity()
@Unique(["team", "challenge", "startsAt", "endAt"])
@ObjectType()
export default class ChallengeToTeam {
  constructor(
    team: Team,
    challenge: Challenge,
    startsAt: Date,
    endAt: Date
  ) {
    this.team = team;
    this.challenge = challenge; 
    this.startsAt = startsAt; 
    this.endAt = endAt;
  }

  @PrimaryGeneratedColumn("uuid")
  @Field(()=> ID)
  id: string; 

  @ManyToOne(() => Team, (team) => team.challengeToTeams, { eager: true, onDelete: "CASCADE", onUpdate: "CASCADE" })
  @Field(()=> Team)
  team: Team; 

  @ManyToOne(() => Challenge, (challenge) => challenge.challengeToTeams, { eager: true, onDelete: "CASCADE", onUpdate: "CASCADE" })
  @Field(() => Challenge)
  challenge: Challenge;

  @Column("timestamptz")
  @Field()
  startsAt: Date; 

  @Column("timestamptz")
  @Field()
  endAt: Date; 
}