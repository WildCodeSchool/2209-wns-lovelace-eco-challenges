import { IsBoolean, IsEmail, IsEnum, IsOptional, IsUUID, MinLength } from "class-validator";
import { ArgsType, Field, ID, Int } from "type-graphql";
import { UserRole } from "../../models/UserToTeam/UserToTeam.entity";

@ArgsType()
class  CreateUserToTeamArgs {
  @Field(() => ID)
  @IsUUID()
  teamId: string;

  @Field()
  @IsEmail()
  userEmail: string;

  @Field(_type => UserRole) 
  @IsEnum(UserRole)
  userRole : UserRole;

  @Field()
  challengeName:string;

  @Field()
  shouldInvite:boolean;

}

export { CreateUserToTeamArgs };