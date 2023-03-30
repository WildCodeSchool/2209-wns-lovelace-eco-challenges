import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class AcceptInvitationArgs {
    @Field()
    id:string
}