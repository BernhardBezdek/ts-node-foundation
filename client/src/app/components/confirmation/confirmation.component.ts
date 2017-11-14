import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {InviteService} from "../../services/invite.service";
import {TranslateService} from "@ngx-translate/core";
import {InviteModel} from "../../../../../server/src/models/invite.model";

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ConfirmationComponent implements OnInit {

    @Input() public invitation: InviteModel;
    @Input() public registrationOpened: boolean = false;
    @Output() public stateChanged = new EventEmitter();

    public confirmConfirmation: boolean = false;
    public declineConfirmation: boolean = false;

    constructor(private inviteService: InviteService,private translate: TranslateService) {
    }

    ngOnInit() {

    }

    public confirm() {
        if (!this.confirmConfirmation) {
            this.confirmConfirmation = true;
        } else {
            this.confirmConfirmation = false;

            this
                .inviteService
                .confirm()
                .subscribe((result) => {
                    this.stateChanged.emit(result);
                });
        }
    }

    public decline() {
        if (!this.declineConfirmation) {
            this.declineConfirmation = true;
        } else {
            this.declineConfirmation = false;

            this
                .inviteService
                .decline()
                .subscribe((result) => {
                    this.stateChanged.emit(result);
                });
        }
    }

}
