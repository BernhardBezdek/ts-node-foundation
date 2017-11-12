import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ContentService {

    constructor(private httpClient: HttpClient) {
    }

    public getContents(): Observable<any> {
        return this.httpClient.get<any>(environment.contents);
    }

}
