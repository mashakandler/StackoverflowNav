import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { SearchresultComponent } from './components/searchresults/searchresult/searchresult.component';
import { SearchresultdetailsComponent } from './components/searchresultdetails/searchresultdetails.component';
import SearchService from './shared/search/search.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    SearchresultsComponent,
    SearchresultComponent,
    SearchresultdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
