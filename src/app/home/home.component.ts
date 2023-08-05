import { Component } from '@angular/core';
import { DictionaryAPIService } from '../Services/dictionary-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  search: string = '';
  dictionaryData: any;

  constructor(private dictionaryService: DictionaryAPIService) {}

  sendValueIntoService(search: string) {
    this.dictionaryService.setWord(search);
  }

  sendSearch() {
    this.sendValueIntoService(this.search);
    // this.dictionaryService.getDictionary().subscribe((data: any) => {
    //   this.dictionaryData = data[0].meanings;
    //   console.log('Yaaaaaaaaaaaa');
    //   console.log(this.dictionaryData);
    // });
  }

  // sendDictionaryIntoService(dictionaryData: any) {
  //   this.dictionaryService.setDictionary(dictionaryData);
  // }
}
