import { IsEmail } from "class-validator";
import { ArgsType, Field, ID, Int } from "type-graphql";

@ArgsType() 
class Pagination {
  @Field(() => Int)
  itemsByPage : number; 

  @Field(() => Int)
  pageNumber : number; 
}


@ArgsType()
class Email {
  @Field()
  @IsEmail()
  email: string;
}

export { Pagination, Email }


