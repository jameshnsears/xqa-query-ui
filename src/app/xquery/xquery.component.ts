import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xquery',
  templateUrl: './xquery.component.html',
  styleUrls: ['./xquery.component.css']
})
export class XqueryComponent implements OnInit {
  xquery: string;
  materialisedView: string;

  constructor() {
  }

  ngOnInit() {
  }

  clear() {
    this.xquery = '';
    this.materialisedView = '';
  }

  run() {
    this.materialisedView = '<some xquery response/>';
  }

}
