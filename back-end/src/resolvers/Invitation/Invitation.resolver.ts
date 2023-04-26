import { Args, Mutation, Query, Resolver } from "type-graphql";
import Invitation from "../../models/Invitation/Invitation.entity";
import InvitationRepository from "../../models/Invitation/Invitation.repository";
import { ReactToInvitation } from "./Invitation.input";

@Resolver(Invitation)
export default class InvitationResolver {
    @Query(() => [Invitation])
    async getInvitations():Promise<Invitation[]> {
        return InvitationRepository.getInvitations()
    }

    @Mutation(() => Invitation)
    async acceptInvitation(@Args(){id}:ReactToInvitation):Promise<Invitation> {
        return InvitationRepository.acceptInvitation(id) 
    }

    @Mutation(() => Invitation)
    async deniInvitation(@Args(){id}:ReactToInvitation):Promise<Invitation> {
        return InvitationRepository.declinInvitation(id)
    }
}