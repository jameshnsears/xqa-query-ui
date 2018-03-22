import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SearchResponse } from '../domain/search.response';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }

  getCarsMedium() {
    return this.http.get<any>('assets/cars-medium.json')
      .toPromise()
      .then(res => <SearchResponse[]>res.data)
      .then(data => data);
  }
}
