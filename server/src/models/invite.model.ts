import {BaseModel} from "../classes/base/base-model";
import {InviteDataInterface} from "../../../shared/interfaces/invite-data.interface";

export class InviteModel extends BaseModel implements InviteDataInterface {

    constructor(invite: InviteDataInterface) {
        super();

        this.id = invite.id || null;
        this.name = invite.name || null;
        this.visits = invite.visits || [new Date().getTime()];
        this.confirmed = invite.confirmed || false;
        this.declined = invite.declined || false;
    }

    protected _properties = ['id', 'name', 'visits', 'confirmed', 'declined'];

    public id: string;
    public name: string;
    public visits: number[];
    public confirmed: boolean;
    public declined: boolean;


    public toJSON(): InviteDataInterface {
        return {
            id: this.id,
            name: this.name,
            visits: this.visits,
            confirmed: this.confirmed,
            declined: this.declined
        };
    }
}