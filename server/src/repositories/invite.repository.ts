import {ModelInterface} from "../interfaces/model.interface";
import {BaseRepository} from "../classes/base/base-repository";
import {InviteModel} from "../models/invite.model";
import {PersistenceInterface} from "../interfaces/persistence.interface";

import {PersistenceFs} from "../persistences/persistence.fs";

export class InviteRepository extends BaseRepository {

    // Both persistence layers provide an identical interface
    protected _persistence: PersistenceInterface = new PersistenceFs(__dirname + '/../../../data/invites');
    //protected _persistence: PersistenceInterface = new PersistenceMemory();

    protected _getModel(modelData): ModelInterface {
        let model = new InviteModel(modelData);
        return model;
    }
}