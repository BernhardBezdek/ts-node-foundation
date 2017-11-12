import {Component, OnInit} from '@angular/core';
import {InviteService} from "./services/invite.service";
import {InviteModel} from "../../../server/src/models/invite.model";
import {InviteDataInterface} from "../../../shared/interfaces/invite-data.interface";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public invitation: InviteModel;

    constructor(private inviteService: InviteService) {

    }

    ngOnInit() {
        this
            .inviteService
            .fetch()
            .subscribe((invite: InviteDataInterface) => this.invitation = new InviteModel(invite));
    }
}
