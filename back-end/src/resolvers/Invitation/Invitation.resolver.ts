import { Args, Mutation, Query, Resolver } from "type-graphql";
import Invitation from "../../models/Invitation/Invitation.entity";
import InvitationRepository from "../../models/Invitation/Invitation.repository";
import { ReactToInvitationArgs } from "./Invitation.input";

@Resolver(Invitation)
export default class InvitationResolver {
    /* @Mutation(() => Invitation)
    static async sendInvitation(): Promise<Invitation>{
        return InvitationRepository.createInvitation()
    } */

    @Mutation(() => Invitation)
    static async acceptInvitation(@Args(){id}:ReactToInvitationArgs):Promise<Invitation> {
        return InvitationRepository.acceptInvitation(id) 
    }

    @Mutation(() => Invitation)
    static async deniInvitation(@Args(){id}:ReactToInvitationArgs):Promise<Invitation> {
        return InvitationRepository.denniInvitation(id)
    }
}