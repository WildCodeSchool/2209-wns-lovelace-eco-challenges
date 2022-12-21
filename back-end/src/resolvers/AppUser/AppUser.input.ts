import { IsEmail, Matches, MinLength } from "class-validator";
import { ArgsType, Field } from "type-graphql";

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
  @MinLength(1, { message: "le pay s doit faire au moins un caractère de long." })
  country:string;

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
