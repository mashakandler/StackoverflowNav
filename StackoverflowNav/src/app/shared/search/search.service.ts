import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import SearchResult from 'src/app/models/searchResult';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export default class SearchService {

  apiRoot = 'https://api.stackexchange.com/2.2';

  constructor(private http: HttpClient) { }

  getSearchResults (tag: string): Observable<any[]> {
    return this.http.get<any[]>(`https://api.stackexchange.com/2.2/tags/${tag}/faq?site=stackoverflow`)
      .pipe(
        map(results => this.mapSearchResults(results)),
        tap(_ => console.log('fetched search results')),
        catchError(this.handleError('getSearchResults', []))
      );
  }

  private mapSearchResults(results: any) {
      return results.items.map((item) => {
          return {
            title: item.title,
            link: item.link,
            answercount: item.answer_count
          };
      });
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }


}
