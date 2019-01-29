import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XQueryComponent } from './xquery.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { TabViewModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

import { HttpClientModule } from '@angular/common/http';

import { XQueryService } from '../service/xquery.service';

describe('XQueryComponent', () => {
  let component: XQueryComponent;
  let fixture: ComponentFixture<XQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XQueryComponent ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        TabViewModule,
        InputTextModule,
        ButtonModule,
        HttpClientModule,
      ],
      providers: [XQueryService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('clear pressed', () => {
    component.clear();
    expect(component.xquery).toEqual('count(/)');
    expect(component.materialisedResponse).toEqual('');
  });
});
