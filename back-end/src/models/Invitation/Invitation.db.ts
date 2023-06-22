import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import Invitation from "./Invitation.entity";
import InvitationRepository from "./Invitation.repository";

export default class InvitationDB  {
    static repository: Repository<Invitation>;

    static async initializeRepository () {
        this.repository = await getRepository(Invitation)
    }

    static async clearRepsoitory (): Promise<void> {
        this.repository.delete({});
    }


    static async initializeInvitation(): Promise<void> {
        await this.clearRepsoitory()
        
        await InvitationRepository.createInvitation("invitation-1")
        await InvitationRepository.createInvitation("invitation-2")
        await InvitationRepository.createInvitation("invitation-3")
        await InvitationRepository.createInvitation("invitation-4")
        await InvitationRepository.createInvitation("invitation-5")
        await InvitationRepository.createInvitation("invitation-6")
        await InvitationRepository.createInvitation("invitation-7")
        await InvitationRepository.createInvitation("invitation-8")
        
    }

    static async getInvitationById(_id:string) {
        return this.repository.findOneBy({id:_id})
    }
}