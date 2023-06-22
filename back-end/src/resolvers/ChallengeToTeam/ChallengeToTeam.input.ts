import { IsDate, IsUUID, MinDate } from "class-validator";
import { ArgsType, Field, ID } from "type-graphql";


const minStartsAt = () => {
  const date = new Date()
  return date.toLocaleString()
}

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
  startsAt: Date;

  @Field()
  @IsDate()
  endAt: Date; 
}

export { CreateChallengeToTeamArgs };