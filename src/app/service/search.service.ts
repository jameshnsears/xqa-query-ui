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

  doSearch(searchValue: string): Observable<SearchResponse[]> {
    const url = `${environment.endpointHost}${environment.endpointSearch}/${searchValue}`;

    return this.http.get<SearchResponse[]>(url)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
}
