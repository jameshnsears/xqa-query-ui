import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SearchResponse } from '../domain/search.response';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class SearchService extends CommonService {
  constructor(private http: HttpClient) {
    super();
  }

  doSearch(searchSpace: string, searchValue: string, k8sIP: string): Observable<SearchResponse[]> {
    var url;
    if (k8sIP != "") {
      url = `http://${k8sIP}:${environment.endpointPort}/${environment.endpointSearch}/${searchSpace}/${searchValue}`;
    } else {
      url = url = `${environment.endpointHost}:${environment.endpointPort}/${environment.endpointSearch}/${searchSpace}/${searchValue}`;
    }
    console.log(url);

    return this.http.get<SearchResponse[]>(url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
}
