import { TestBed, inject } from '@angular/core/testing';

import { NodeService } from './node.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { SelectButtonModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';
import { TreeTableModule } from 'primeng/primeng';

describe('NodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NodeService],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        TabViewModule,
        ButtonModule,
        SelectButtonModule,
        DataTableModule,
        HttpClientModule,
        TreeTableModule
      ]
    });
  });

  it('should be created', inject([NodeService], (service: NodeService) => {
    expect(service).toBeTruthy();
  }));
});
