import * as Promise from "bluebird";
import * as express from "express";
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

    constructor(protected _router: express.Router) {
        super(_router);

        this._router.get(this._endpoint + '/stats', (req: express.Request, res: express.Response): void => {
            this
                ._fetchStats()
                .then((result: any) => res.json(result))
                .catch((error) => {
                    res.json(error.message);
                });
        });

    }

    protected _fetchStats() {
        const MAX_SEATS = 8;
        return this
            ._repository
            .fetchAll()
            .then((invites: InviteModel[]) => {
                return {
                    seats: MAX_SEATS,
                    confirmations: invites.filter((invite) => {
                        return invite.confirmed;
                    }).length
                };
            });
    }

    /// Not implemented

    protected _create() {
        return new Promise((resolve) => resolve({error: 'NOT_IMPLEMENTED'}));
    }


}