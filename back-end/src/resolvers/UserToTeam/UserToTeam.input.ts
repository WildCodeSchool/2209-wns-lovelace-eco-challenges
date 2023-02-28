import { IsBoolean, IsEnum, IsOptional, IsUUID, MinLength } from "class-validator";
import { ArgsType, Field, ID, Int } from "type-graphql";
import { UserRole } from "../../models/UserToTeam/UserToTeam.entity";

@ArgsType()
class  CreateUserToTeamArgs {
  @Field(() => ID)
  @IsUUID()
  teamId: string;

  @Field(() => ID)
  @IsUUID()
  userId: string;

  @Field(_type => UserRole) 
  @IsEnum(UserRole)
  userRole : UserRole;

  @Field(() => Int, { defaultValue: 0 })
  score: number;

  @Field({ defaultValue: false })
  @IsBoolean()
  disabled: boolean; 

  @Field(() => ID, { nullable: true })
  @IsOptional()
  @IsUUID()
  invitation: string;
}

// @ArgsType()
// class UpdateUserToTeamArgs extends CreateUserToTeamArgs {
//   @Field(() => ID)
//   @IsUUID()
//   id: string;
// }

export { CreateUserToTeamArgs };