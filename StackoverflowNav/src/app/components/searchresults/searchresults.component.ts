import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import SearchResult from 'src/app/models/searchResult';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss']
})
export class SearchresultsComponent {

  constructor() { }

  @Input() searchResults: SearchResult[];
  @Output() selectResult = new EventEmitter();

  onClickHandler(searchResult) {
    this.selectResult.emit(searchResult);
  }

}
