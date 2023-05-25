import { IsBoolean, IsOptional, IsUUID, MinLength } from "class-validator";
import { Stream } from "stream";
import { ArgsType, Field, ID } from "type-graphql";

@ArgsType()
class  CreateTeamArgs {
  @Field()
  @MinLength(1, {
    message: "Le nom de votre Team doit faire au moins un caractère de long.",
  })
  teamName: string;

  @Field()
  @MinLength(1, {
    message: "La ville doit faire au moins un caractère de long.",
  })
  city: string;

  @Field()
  @MinLength(2, {
    message: "Le pays doit faire au moins deux caractère de long.",
  })
  country: string;

  @Field({ nullable: true })
  @IsOptional()
  img: string;

  @Field()
  @IsBoolean()
  isPublic: boolean; 
}

@ArgsType()
class UpdateTeamArgs extends CreateTeamArgs {
  @Field(() => ID)
  @IsUUID()
  id: string;
}

export { CreateTeamArgs, UpdateTeamArgs};