import { IsEmail, IsEnum, IsUUID } from "class-validator";
import { ArgsType, Field, ID } from "type-graphql";
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

  @Field({ nullable: true })
  challengeName?:string;
}

export { CreateUserToTeamArgs };