import { IsDate, IsUUID, MinDate } from "class-validator";
import { ArgsType, Field, ID } from "type-graphql";

@ArgsType()
class CreateChallengeToTeamArgs {
  @Field(() => ID)
  @IsUUID()
  teamId: string;

  @Field(() => ID)
  @IsUUID()
  challengeId: string;

  @Field()
  @IsDate()
  @MinDate(new Date(),{ message: "La date de début ne peut être inférieure à la date du jour"})
  startsAt: Date;

  @Field()
  @IsDate()
  endAt: Date; 
}

export { CreateChallengeToTeamArgs };