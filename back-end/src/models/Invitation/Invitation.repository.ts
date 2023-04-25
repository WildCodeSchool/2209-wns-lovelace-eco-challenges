import InvitationDB from "./Invitation.db";
import Invitation, { InvitationStatus } from "./Invitation.entity";

export default class InvitationRepository extends InvitationDB {
    static async createInvitation (_name:string):Promise<Invitation> {
        const newInvitation = new Invitation(_name, InvitationStatus.PENDING, new Date())
        
        this.repository.save(newInvitation)
        
        return newInvitation
    }
    

    static async acceptInvitation(_id:string): Promise<Invitation> {
        const invitation = await this.getInvitationById(_id)
        
        if(invitation) {
            if(invitation.status == InvitationStatus.PENDING) {
                return this.repository.save({...invitation, status:InvitationStatus.ACCEPTED})
            } else{
                throw Error(`the invitation has already been close`)
            }
        } else {
            throw Error("No existing Invitation matching ID.")
        }
    }

    static async getInvitations() {
        return this.repository.find()
    }

    static async declinInvitation(_id:string): Promise<Invitation> {
        const invitation = await this.getInvitationById(_id)

        if(invitation) {
            if(invitation.status == InvitationStatus.PENDING) {
                return this.repository.save({...invitation, status:InvitationStatus.DENIED})
            } else{
                throw Error(`the invitation has already been close`)
            }
        } else {
            throw Error("No existing Invitation matching ID.")
        }
    }
}