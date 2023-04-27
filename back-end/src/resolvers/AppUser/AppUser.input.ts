import { IsEmail, IsEnum, IsOptional, IsUUID, Matches, MinLength } from "class-validator";
import { ArgsType, Field, ID } from "type-graphql";
import { Hobbies } from "../../models/AppUser/AppUser.entity";

const passwordRegExp = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

@ArgsType()
export class SignUpArgs {
  @Field()
  @MinLength(1, {
    message: "Le prénom doit faire au moins un caractère de long.",
  })
  firstName: string;

  @Field()
  @MinLength(1, { message: "Le nom doit faire au moins un caractère de long." })
  lastName: string;

  @Field()
  @MinLength(1, { message: "Le pseudo doit faire au moins un caractère de long." })
  nickname: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(1, { message: "La ville doit faire au moins un caractère de long." })
  city: string;

  @Field()
  @MinLength(1, { message: "La description doit faire au moins un caractère de long." })
  desc: string;

  @Field()
  age: number;

  @Field()
  @MinLength(1, { message: "le pays doit faire au moins un caractère de long." })
  country: string;

  @Field()
  @Matches(passwordRegExp, {
    message:
      "Le mot de passe doit comporter au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.",
  })
  password: string;
}

@ArgsType()
export class SignInArgs {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}

@ArgsType()
export class UpdateAppUserArgs {

  @Field(() => ID)
  @IsUUID()
  id: string;

  @Field({ nullable: true })
  @MinLength(1, {
    message: "Le prénom doit faire au moins un caractère de long.",
  })
  firstName?: string;

  @Field({ nullable: true })
  @MinLength(1, { message: "Le nom doit faire au moins un caractère de long." })
  lastName?: string;

  @Field({ nullable: true })
  @MinLength(1, { message: "Le pseudo doit faire au moins un caractère de long." })
  nickname?: string;

  @Field({ nullable: true })
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @MinLength(1, { message: "La description doit faire au moins un caractère de long." })
  desc?: string;

  @Field({ nullable: true })
  age?: number;

  @Field({ nullable: true })
  @MinLength(1, { message: "La ville doit faire au moins un caractère de long." })
  city?: string;

  @Field({ nullable: true })
  @MinLength(1, { message: "le pays doit faire au moins un caractère de long." })
  country?: string;

  // @Field({ nullable: true })
  // @Matches(passwordRegExp, {
  //   message:
  //     "Le mot de passe doit comporter au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.",
  // })
  // password?: string;

  @Field({ nullable: true })
  img?: string;

  @Field(_type => [Hobbies], { nullable: true })
  @IsEnum(Hobbies, { each: true })
  hobbies?: Hobbies[]
} 
@ArgsType()
export class ChangePasswordArgs {
  @Field()
  userId:string;

  @Field()
  @Matches(passwordRegExp, {
    message:
      "Le mot de passe doit comporter au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.",
  })
  newPassword: string;
}

@ArgsType()
export class askChangePasswordArgs {
  @Field()
  @IsEmail()
  email:string
}
