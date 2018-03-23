import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class XQueryService {
  constructor(private http: HttpClient) {
  }

  doRun(xquery: string): Observable<string> {
    return this.http.get<string>('assets/xquery.response.json',
    { params: new HttpParams().set('xquery', xquery) })
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
