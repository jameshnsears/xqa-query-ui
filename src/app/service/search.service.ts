import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, retry } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpParams, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


import { SearchResponse } from '../domain/search.response';


@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  getConfig(searchValue: string) {
    return this.http.get<any>('assets/search.response.json',
      { params: new HttpParams().set('searchValue', searchValue) })
      .toPromise()
      .then(res => <SearchResponse[]>res.data)
      .then(data => data);
  }

  getHeroes(searchValue: string): Observable<SearchResponse[]> {
    return this.http.get<SearchResponse[]>('assets/search.response.json',
    { params: new HttpParams().set('searchValue', searchValue) })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }
}
