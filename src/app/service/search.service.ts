import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SearchResponse } from '../domain/search.response';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) { }

  doSearch(searchValue: string): Observable<SearchResponse[]> {
    const url = `${environment.endpointHost}${environment.endpointSearch}`;

    return this.http.get<SearchResponse[]>(url, { params: new HttpParams().set('searchValue', searchValue) })
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(error.error.message);
    }
    return new ErrorObservable(`${error.status} - unable to get data`);
  }
}
