import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/primeng';

@Injectable()
export class StatusService {
  r?: any;

  constructor(private http: HttpClient) { }

  getStatusResponse() {
    this.r = this.http.get<any>('assets/status.response.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);

    return this.r;
  }
}
