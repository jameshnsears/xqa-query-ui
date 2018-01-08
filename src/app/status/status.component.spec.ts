import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusComponent } from './status.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { SelectButtonModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';
import { TreeTableModule } from 'primeng/primeng';

import { NodeService } from '../service/node.service';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatusComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        TabViewModule,
        ButtonModule,
        SelectButtonModule,
        DataTableModule,
        HttpClientModule,
        TreeTableModule
      ],
      providers: [NodeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
