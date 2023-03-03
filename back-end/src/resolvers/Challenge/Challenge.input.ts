import { IsDate, IsEnum, IsOptional, IsUUID, MaxLength, MinDate, MinLength, MIN_DATE, ValidateIf } from "class-validator";
import { ArgsType, Field, ID } from "type-graphql";
import { Category, Level } from "../../models/Challenge/Challenge.entity";

@ArgsType()
class CreateChallengeArgs {
  @Field()
  @MinLength(1, {
    message: "Le nom du Challenge doit faire au moins un caractère de long.",
  })
  challengeName: string; 

  @Field(_type => Level) 
  @IsEnum(Level)
  level : Level; 

  @Field()
  @MaxLength(500, {
    message: "maximum 500 caractères autorisés"
  })
  description: string; 

  @Field(_type => [Category]) 
  @IsEnum(Category, { each: true })
  category: Category[];

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  @MinDate(new Date(),{ message: "La date de début ne peut être inférieure à la date du jour"})
  startsAt?: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  
  // @MinDate()
  endAt?: Date; 

  @Field({ nullable: true })
  @IsOptional()
  img?: string; 
}

@ArgsType()
class UpdateDatesChallengeArgs {
  @Field(() => ID)
  @IsUUID()
  id: string; 

  @Field()
  @IsDate()
  @MinDate(new Date(),{ message: "La date de début ne peut être inférieure à la date du jour"})
  startsAt?: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  // @MinDate(o => o.startsAt)
  endAt?: Date; 
}

@ArgsType() 
class UpdateChallengePremiumArgs extends CreateChallengeArgs {
  @Field(() => ID)
  @IsUUID()
  id: string; 
}

export { CreateChallengeArgs, UpdateDatesChallengeArgs, UpdateChallengePremiumArgs }


