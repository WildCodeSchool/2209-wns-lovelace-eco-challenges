import { ArgsType, Field, ID, Int } from "type-graphql";

@ArgsType() 
class Pagination {
  @Field(() => Int)
  itemsByPage : number; 

  @Field(() => Int)
  pageNumber : number; 
}

export { Pagination }


