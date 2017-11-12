import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {InviteDataInterface} from "../../../../shared/interfaces/invite-data.interface";
import {environment} from '../../environments/environment';

@Injectable()
export class InviteService {

    private _identifier: string = '';

    constructor(private _httpClient: HttpClient) {
        this._identifier = window.location.hash.replace('#', '');

    }

    fetch(): Observable<InviteDataInterface> {
        return this._httpClient.get<InviteDataInterface>(environment.api + '/invite/' + this._identifier);
    }

    confirm() {
        return this._httpClient.put<Boolean>(environment.api + '/invite/' + this._identifier, {confirmed: true});
    }

    decline() {
        return this._httpClient.delete<Boolean>(environment.api + '/invite/' + this._identifier);
    }

}