import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class XQueryService extends CommonService {
  constructor(private http: HttpClient) {
    super();
  }

  doRun(xquery: string): Observable<string> {
    const url = `${environment.endpointHost}:${environment.endpointPort}/${environment.endpointXQuery}`;
    let json = { xqueryRequest: xquery };

    return this.http.post<string>(url, json, httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
}
