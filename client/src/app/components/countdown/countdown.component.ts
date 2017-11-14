import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-countdown',
    templateUrl: './countdown.component.html',
    styleUrls: ['./countdown.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CountdownComponent implements OnInit {

    @Input() public countdownTime: number;
    public countdown: string;
    public targetDate: Date;

    constructor(private translate: TranslateService) {
    }

    ngOnInit() {
        this.targetDate = new Date(this.countdownTime);

        setInterval(() => {
            this._calculateRemainingTime();
        }, 1000);
    }

    private _calculateRemainingTime() {
        let dateFuture = new Date(this.countdownTime).getTime();
        let dateNow = new Date().getTime();

        let seconds = Math.floor((dateFuture - (dateNow)) / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

        this.countdown = days + ' Days / ' + hours + ' Hours / ' + minutes + ' Minutes';
    }


}
