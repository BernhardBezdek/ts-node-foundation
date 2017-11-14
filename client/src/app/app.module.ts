// MODULES
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';

// SERVICES

// COMPONENTS
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ContentComponent} from './components/content/content.component';
import {ConfirmationComponent} from './components/confirmation/confirmation.component';
import {CountdownComponent} from './components/countdown/countdown.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {ContentService} from "./services/content.service";
import {InviteService} from "./services/invite.service";


@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        ConfirmationComponent,
        CountdownComponent,
        CalendarComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        TranslateModule.forRoot()
    ],
    providers: [ContentService, InviteService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
