import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class InvitrService {

    private identifier:string = '';

    constructor(private $httpClient: HttpClient) {

    }

}