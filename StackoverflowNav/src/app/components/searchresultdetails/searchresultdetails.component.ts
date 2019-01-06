import { Component, OnInit, Input } from '@angular/core';
import SearchResult from 'src/app/models/searchResult';

@Component({
  selector: 'app-searchresultdetails',
  templateUrl: './searchresultdetails.component.html',
  styleUrls: ['./searchresultdetails.component.scss']
})
export class SearchresultdetailsComponent implements OnInit {

  @Input() searchResult: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}
