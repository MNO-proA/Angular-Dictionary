import { Component, OnInit } from '@angular/core';
import { DictionaryAPIService } from '../Services/dictionary-api.service';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css'],
})
export class DefinitionComponent implements OnInit {
  dictData: any;

  constructor(private dictService: DictionaryAPIService) {}

  ngOnInit(): void {
    this.dictService.getDictionary().subscribe((data: any) => {
      this.dictData = data[0].meanings;
      console.log(this.dictData);
    });
  }
}
