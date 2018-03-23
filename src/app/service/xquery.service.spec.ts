import { TestBed, inject } from '@angular/core/testing';

import { XQueryService } from './xquery.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';

describe('XQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XQueryService],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        TabViewModule,
        ButtonModule,
        HttpClientModule,
      ]
    });
  });

  it('should be created', inject([XQueryService], (service: XQueryService) => {
    expect(service).toBeTruthy();
  }));
});
