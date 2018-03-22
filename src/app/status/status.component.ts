import { Component, OnInit } from '@angular/core';

import { TreeNode } from 'primeng/primeng';

import { StatusService } from '../service/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  status: TreeNode[];

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.statusService.getStatusResponse().then(status => this.status = status);
  }

  refresh() {
  }
}
