import { Component, OnInit } from '@angular/core';

import { TreeNode } from 'primeng/primeng';

import { NodeService } from '../service/node.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  files1: TreeNode[];

  constructor(private nodeService: NodeService) { }

  ngOnInit() {
    this.nodeService.getFiles().then(files => this.files1 = files);
  }

  refresh() {
  }
}
