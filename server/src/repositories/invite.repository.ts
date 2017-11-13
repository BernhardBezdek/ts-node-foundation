import {ModelInterface} from "../interfaces/model.interface";
import {BaseRepository} from "../classes/base/base-repository";
import {InviteModel} from "../models/invite.model";
import {PersistenceInterface} from "../interfaces/persistence.interface";

import {PersistenceFs} from "../persistences/persistence.fs";

export class InviteRepository extends BaseRepository {

    // Both persistence layers provide an identical interface
    protected _persistence: PersistenceInterface = new PersistenceFs(__dirname + '/../../../data/invites');
    protected _peoples: PersistenceInterface = new PersistenceFs(__dirname + '/../../../data');
    protected _config: PersistenceInterface = new PersistenceFs(__dirname + '/../config');

    private config: any;


    //protected _persistence: PersistenceInterface = new PersistenceMemory();

    constructor() {
        super();

        this
            .createInvitations()
            .then(() => {
                return this.fetchAll();
            })
            .then((invitations) => {
                this
                    ._config
                    .fetch('config.' + (process.env.NODE_ENV || 'development') + '.json')
                    .then((config) => {
                        return config.server.protocol + '://' + config.server.domain + '#';
                    })
                    .then((baseUrl) => {
                        return invitations.map((invitation) => {
                            return invitation.name + ' - ' + baseUrl + invitation.id;
                        });
                    })
                    .then((inviteList) => {
                        console.log(JSON.stringify(inviteList, null, '\t'));
                    });
            });
    }

    private createInvitations() {
        return this
            ._peoples
            .fetch('people')
            .then((people) => {

                if (!people) {
                    return false;
                }

                return Promise.all(people.map((person) => {

                    let invitation = this._getModel({
                        name: person,
                        visits: [],
                        confirmed: false,
                        declined: false
                    });

                    return this._persistence.create(invitation);
                }));
            })
            .then((result) => {

                if (!result) {
                    return false;
                }

                return this._peoples.remove('people');
            })
            .then((result) => {
                if (!!result) {
                    console.log('Created invites');
                }
            });
    }

    protected _getModel(modelData): ModelInterface {
        let model = new InviteModel(modelData);
        return model;
    }
}