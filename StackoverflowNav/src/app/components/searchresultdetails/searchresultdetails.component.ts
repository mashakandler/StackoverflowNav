import { Component, OnInit, Input } from '@angular/core';
import SearchResult from 'src/app/models/searchResult';

@Component({
  selector: 'app-search-result-details',
  templateUrl: './searchresultdetails.component.html',
  styleUrls: ['./searchresultdetails.component.scss']
})
export class SearchResultDetailsComponent implements OnInit {

  @Input() searchResult: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}
