import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XqueryComponent } from './xquery.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { TabViewModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

describe('XqueryComponent', () => {
  let component: XqueryComponent;
  let fixture: ComponentFixture<XqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XqueryComponent ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        TabViewModule,
        InputTextModule,
        ButtonModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
