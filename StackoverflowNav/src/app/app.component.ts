import { Component } from '@angular/core';
import SearchResult from './models/searchResult';
import SerachService from './shared/search/search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StackoverflowNav';
  searchResults: SearchResult[];

  constructor(private serachService: SerachService) { }

  searchHandle(event) {
      this.serachService.getSearchResults(event).subscribe((data) => {
          this.searchResults = data;
      });
  }
}
