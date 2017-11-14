// MODULES
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
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
import {HttpLoaderFactory} from "./factories/translate-http-loader";

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
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [HttpClient]
            }
        })
    ],
    providers: [ContentService, InviteService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
