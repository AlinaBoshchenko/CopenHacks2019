import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RequestTranslationService {

    constructor(private http: HttpClient) { }

    requestTranslation(data: object) {
        const url = '/translation.json';
        return this.http.post(url, data);
    }

}
