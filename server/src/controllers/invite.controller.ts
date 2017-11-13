import * as Promise from "bluebird";
import {BaseController} from "../classes/base/base-controller";
import {InviteRepository} from "../repositories/invite.repository";
import {InviteModel} from "../models/invite.model";

export class InviteController extends BaseController {
    protected _endpoint: string = '/invite';
    protected _repository = new InviteRepository();


    protected _fetch(id: string) {
        console.log(id.toString());
        return this._repository.fetch(id).then((invitation: InviteModel) => {

            invitation.visits.push(new Date().getTime());

            return this._repository.update(id, {visits: invitation.visits}).then(() => {
                return invitation;
            });
        })
    }

    protected _remove(id: string) {
        return this._repository.update(id, {declined: true});
    }


    /// Not implemented

    protected _create() {
        return new Promise((resolve) => resolve({error: 'NOT_IMPLEMENTED'}));
    }

    protected _fetchAll() {
        return new Promise((resolve) => resolve([{error: 'NOT_IMPLEMENTED'}]));
    }


}