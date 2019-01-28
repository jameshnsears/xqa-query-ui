import { Component, OnInit } from '@angular/core';

import { XQueryService } from '../service/xquery.service';


@Component({
  selector: 'app-xquery',
  templateUrl: './xquery.component.html',
  styleUrls: ['./xquery.component.css']
})
export class XQueryComponent implements OnInit {
  xquery: string;
  materialisedResponse: string;

  constructor(private xqueryService: XQueryService) {
  }

  ngOnInit() {
    this.xquery = 'count(/)'
  }

  clear() {
    this.xquery = 'count(/)';
    this.materialisedResponse = '';
  }

  run() {
    this.xqueryService.doRun(this.xquery)
    .subscribe(
      materialisedResponse => this.materialisedResponse = materialisedResponse['xqueryResponse'],
      error => this.materialisedResponse = error
    );
  }
}
