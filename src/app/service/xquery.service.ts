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

  doRun(xquery: string, k8sIP: string): Observable<string> {
    let url;
    if (k8sIP !== '') {
      url = `http://${k8sIP}:${environment.endpointPort}/${environment.endpointXQuery}`;
    } else {
      url = `${environment.endpointHost}:${environment.endpointPort}/${environment.endpointXQuery}`;
    }
    console.log(url);

    const json = { xqueryRequest: xquery };
    console.log(json);

    return this.http.post<string>(url, json, httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
}
