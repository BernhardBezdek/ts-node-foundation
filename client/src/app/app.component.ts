import {Component, OnInit} from '@angular/core';
import {InviteService} from "./services/invite.service";
import {InviteModel} from "../../../server/src/models/invite.model";
import {InviteDataInterface} from "../../../shared/interfaces/invite-data.interface";
import {environment} from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public invitation: InviteModel;

    public registrationOpened: boolean = false;
    public reminderForLabel: string;
    public name: string;
    public description: string;
    public countdownTime: number;

    constructor(private inviteService: InviteService) {

    }

    ngOnInit() {
        this._setCountdownTime();
        this.refresh();
    }

    private _setCountdownTime() {

        let now = new Date().getTime();

        if (now <= environment.dates.registration) {
            this.reminderForLabel = 'registration';
            this.countdownTime = environment.dates.registration;
            this.name = 'Registration opens';
            this.description = 'Reminds you 15 minutes before registration will be opened';
        } else if (now <= environment.dates.event) {
            this.registrationOpened = true;
            this.reminderForLabel = 'event';
            this.countdownTime = environment.dates.event;
            this.name = 'Event';
            this.description = '';
        } else {
            this.name = '';
            this.description = '';
        }
    }

    public refresh() {
        this
            .inviteService
            .fetch()
            .subscribe((invite: InviteDataInterface) => this.invitation = new InviteModel(invite));
    }
}
