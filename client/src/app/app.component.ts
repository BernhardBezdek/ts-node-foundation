import {Component, OnInit} from '@angular/core';
import {InviteService} from "./services/invite.service";
import {InviteModel} from "../../../server/src/models/invite.model";
import {InviteDataInterface} from "../../../shared/interfaces/invite-data.interface";
import {environment} from '../environments/environment';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public invitation: InviteModel;
    public seats: number = environment.seats;
    public registrationOpened: boolean = false;
    public reminderForLabel: string;
    public name: string;
    public description: string;
    public countdownTime: number;
    public stats: Object;

    constructor(private inviteService: InviteService, private translate: TranslateService) {
        translate.setDefaultLang('en');
    }

    ngOnInit() {
        this._setCountdownTime();
        this.refresh();
        this.refreshStats();

        setInterval(() => {
            this.refreshStats();
        }, 10000);
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

    public refreshStats() {
        this
            .inviteService
            .fetchStats()
            .subscribe((stats) => {
                this.stats = stats;
            });
    }

    public refresh() {
        this
            .inviteService
            .fetch()
            .subscribe((invite: InviteDataInterface) => {

                if (!invite) {
                    return;
                }

                this.invitation = new InviteModel(invite);
            });
    }
}
