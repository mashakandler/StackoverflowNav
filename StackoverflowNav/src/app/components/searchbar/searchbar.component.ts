import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

  searchTerm: string;
  searchResults: any[];
  @Output() search = new EventEmitter();

  constructor() { }


  onSearchSubmit() {

    this.search.emit(this.searchTerm);
  }

}
