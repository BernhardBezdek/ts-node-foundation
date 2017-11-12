import * as Promise from "bluebird";
import {BaseController} from "../classes/base/base-controller";
import {InviteRepository} from "../repositories/invite.repository";

export class InviteController extends BaseController {
    protected _endpoint: string = '/invite';
    protected _repository = new InviteRepository();

    protected _create() {
        return new Promise((resolve) => resolve({error: 'NOT_IMPLEMENTED'}));
    }

    protected _fetchAll() {
        return new Promise((resolve) => resolve([{error: 'NOT_IMPLEMENTED'}]));
    }

    protected _remove() {
        return new Promise((resolve) => resolve({error: 'NOT_IMPLEMENTED'}));
    }
}