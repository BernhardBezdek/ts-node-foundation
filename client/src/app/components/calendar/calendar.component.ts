import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {

    @Input() public reminderForLabel: string;
    @Input() public countdownTime: number;
    @Input() public name: string;
    @Input() public description: string;

    private callendarPlugin: any;

    constructor() {
    }

    ngOnInit() {
        let w: any = window;
        if (!!w['ics']) {
            this.callendarPlugin = w['ics']();
        }
    }

    getCalendarEntry() {
        let minutesAroundDate = 1000 * 60 * 15;
        this.callendarPlugin.addEvent(
            'Signup for Event',
            '',
            '',
            new Date(this.countdownTime - minutesAroundDate).toISOString().replace(/[A-Z]/g,' ').replace(/\.000\s/,'').replace(/-/g, '/'),
            new Date(this.countdownTime + minutesAroundDate).toISOString().replace(/[A-Z]/g,' ').replace(/\.000\s/,'').replace(/-/g, '/'),
        );
        this.callendarPlugin.download();
    }

}
