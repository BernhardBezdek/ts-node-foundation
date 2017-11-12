import * as Promise from "bluebird";
import {BaseController} from "../classes/base/base-controller";
import {InviteRepository} from "../repositories/invite.repository";
import {InviteModel} from "../models/invite.model";

export class InviteController extends BaseController {
    protected _endpoint: string = '/invite';
    protected _repository = new InviteRepository();

    protected _create() {
        return new Promise((resolve) => resolve({error: 'NOT_IMPLEMENTED'}));
    }

    protected _fetchAll() {
        return new Promise((resolve) => resolve([{error: 'NOT_IMPLEMENTED'}]));
    }

    protected _remove(id: string) {
        console.log('DECLINED ENDPOINT CALLED');
        return this._repository.update(id, {declined: true});
    }
}