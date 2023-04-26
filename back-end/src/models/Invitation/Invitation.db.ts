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
        
        const invitation1 = await InvitationRepository.createInvitation("invitation-1")
        const invitation2 = await InvitationRepository.createInvitation("invitation-2")
        const invitation3 = await InvitationRepository.createInvitation("invitation-3")
        const invitation4 = await InvitationRepository.createInvitation("invitation-4")
        const invitation5 = await InvitationRepository.createInvitation("invitation-5")
        const invitation6 = await InvitationRepository.createInvitation("invitation-6")
        const invitation7 = await InvitationRepository.createInvitation("invitation-7")
        const invitation8 = await InvitationRepository.createInvitation("invitation-8")
        
        await this.repository.save([invitation1, invitation2, invitation3, invitation4, invitation5, invitation6, invitation7, invitation8])
    }

    static async getInvitationById(_id:string) {
        return this.repository.findOneBy({id:_id})
    }
}