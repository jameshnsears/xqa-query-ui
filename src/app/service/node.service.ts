import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/primeng';

@Injectable()
export class NodeService {
  r?: any;

  constructor(private http: HttpClient) { }

  getFiles() {
    this.r = this.http.get<any>('assets/files.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);

    return this.r;
  }
}
