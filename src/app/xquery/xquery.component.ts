import { Component, OnInit } from '@angular/core';

import { XQueryServices } from '../service/xquery.service';


@Component({
  selector: 'app-xquery',
  templateUrl: './xquery.component.html',
  styleUrls: ['./xquery.component.css']
})
export class XqueryComponent implements OnInit {
  xquery: string;
  materialisedResponse: string;
  error: string;

  constructor(private statusService: StatusService) {
  }

  ngOnInit() {
  }

  clear() {
    this.xquery = '';
    this.materialisedResponse = '';
  }

  run() {
    this.materialisedResponse = '<some xquery response/>';
  }

}
