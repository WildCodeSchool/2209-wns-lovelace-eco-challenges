import InvitationDB from "./Invitation.db";
import Invitation, { InvitationStatus } from "./Invitation.entity";

export default class InvitationRepository extends InvitationDB {
    static async createInvitation (_name:string):Promise<Invitation> {
        const date = new Date()
        const newInvitation = new Invitation(_name, InvitationStatus.PENDING, date)

        this.repository.save(newInvitation)

        return newInvitation
    }

    static async acceptInvitation(_id:string): Promise<Invitation> {
        const invitation = await this.getInvitationById(_id)

        if(invitation) {
            return this.repository.save({...invitation, status:InvitationStatus.ACCEPTED})
        } else {
            throw Error("No existing Invitation matching ID.")
        }
    }

    static async denniInvitation(_id:string): Promise<Invitation> {
        const invitation = await this.getInvitationById(_id)

        if(invitation) {
            return this.repository.save({...invitation, status:InvitationStatus.DENIED})
        } else {
            throw Error("No existing Invitation matching ID.")
        }
    }
}