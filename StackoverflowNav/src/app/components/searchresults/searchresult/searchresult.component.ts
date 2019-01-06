import { Component, OnInit, Input } from '@angular/core';
import SearchResult from 'src/app/models/searchResult';

@Component({
  selector: 'app-search-result',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() searchresult: SearchResult;

  constructor() { }

  ngOnInit() {

  }

}
