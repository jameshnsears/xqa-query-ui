import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TreeNode } from 'primeng/primeng';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class StatusService extends CommonService {
  constructor(private http: HttpClient) {
    super();
  }

  doRefresh(): Observable<TreeNode[]> {
    const url = `${environment.endpointHost}${environment.endpointStatus}`;

    return this.http.get<TreeNode[]>(url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
}
