import { Component, OnInit } from '@angular/core';

import { XQueryService } from '../service/xquery.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-xquery',
  templateUrl: './xquery.component.html',
  styleUrls: ['./xquery.component.css']
})
export class XQueryComponent implements OnInit {
  k8sIP: string;
  xquery: string;
  materialisedResponse: string;

  constructor(private xqueryService: XQueryService, public appComponent: AppComponent) {
  }

  ngOnInit() {
    this.xquery = 'count(/)';
  }

  clear() {
    this.xquery = 'count(/)';
    this.materialisedResponse = '';
  }

  run() {
    this.xqueryService.doRun(this.xquery, this.appComponent.k8sIP)
    .subscribe(
      materialisedResponse => this.materialisedResponse = materialisedResponse['xqueryResponse'],
      error => this.materialisedResponse = error
    );
  }
}
