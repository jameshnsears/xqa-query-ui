import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SearchResponse } from '../domain/search.response';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  getSearchResponse() {
    return this.http.get<any>('assets/search.response.json')
      .toPromise()
      .then(res => <SearchResponse[]>res.data)
      .then(data => data);
  }
}
