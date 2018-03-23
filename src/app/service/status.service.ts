import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TreeNode } from 'primeng/primeng';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class StatusService {
  constructor(private http: HttpClient) {
  }

  doRefresh(): Observable<TreeNode[]> {
    const url = `${environment.endpointHost}${environment.endpointStatus}`;

    return this.http.get<TreeNode[]>(url)
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
