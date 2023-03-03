import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import Invitation from "./Invitation.entity";

export default class InvitationDB  {
    static repository: Repository<Invitation>;

    static async InitializeRepository () {
        this.repository = await getRepository(Invitation)
    }

    static async clearRepsoitory (): Promise<void> {
        this.repository.delete({});
    }
}