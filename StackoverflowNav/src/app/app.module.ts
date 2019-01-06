import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchResultsComponent } from './components/searchresults/searchresults.component';
import { SearchResultComponent } from './components/searchresults/searchresult/searchresult.component';
import { SearchResultDetailsComponent } from './components/searchresultdetails/searchresultdetails.component';
import SearchService from './shared/search/search.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    SearchResultsComponent,
    SearchResultComponent,
    SearchResultDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
