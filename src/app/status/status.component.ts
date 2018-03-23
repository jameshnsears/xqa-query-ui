import { Component, OnInit } from '@angular/core';

import { TreeNode } from 'primeng/primeng';
import { StatusService } from '../service/status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  statusResponse: TreeNode[];
  error: any;

  constructor(private statusService: StatusService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.statusService.doRefresh()
    .subscribe(
      statusResponse => this.statusResponse = statusResponse,
      error => this.error = error
    );
  }
}
