import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LanguagesService {

  constructor(private http: HttpClient) { }

  getLanguages() {
    //const url = '../data/languages.json';
    const url = 'https://translation.googleapis.com/language/translate/v2/languages';
    return this.http.get(url);
  }

}
