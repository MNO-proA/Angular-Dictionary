import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DictionaryAPIService {
  constructor(private https: HttpClient) {}
  search: string = '';
  dictionaryInService: any;

  public setWord(data: string) {
    this.search = data;
  }

  public setDictionary(dictionaryDataFromHome: any) {
    this.dictionaryInService = dictionaryDataFromHome;
  }

  getDictionary() {
    return this.https.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${this.search}`
    );
  }
}
