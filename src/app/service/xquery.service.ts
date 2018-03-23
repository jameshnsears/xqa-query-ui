import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class XQueryService {
  constructor(private http: HttpClient) {
  }

  doRun(xquery: string): Observable<string> {
    const url = `${environment.endpointHost}${environment.endpointXQuery}`;

    return this.http.get<string>(url, { params: new HttpParams().set('xquery', xquery) })
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
