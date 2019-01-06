import { Component, OnInit, Input } from '@angular/core';
import SearchResult from 'src/app/models/searchResult';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {

  @Input() searchresult: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}
