import { IsBoolean, IsOptional, IsUUID, MinLength } from "class-validator";
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
    message: "Le pays doit faire au moins deux caractères de long.",
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
class UpdateTeamArgs {
  @Field(() => ID)
  @IsUUID()
  id: string;

  @Field({ nullable: true })
  @MinLength(1, {
    message: "Le nom de votre Team doit faire au moins un caractère de long.",
  })
  teamName: string;

  @Field({ nullable: true })
  @MinLength(1, {
    message: "La ville doit faire au moins un caractère de long.",
  })
  city: string;

  @Field({ nullable: true })
  @MinLength(2, {
    message: "Le pays doit faire au moins deux caractère de long.",
  })
  country: string;

  @Field({ nullable: true })
  @IsOptional()
  img: string;

  @Field({ nullable: true })
  @IsBoolean()
  isPublic: boolean; 
}

export { CreateTeamArgs, UpdateTeamArgs};