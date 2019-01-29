import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { TabViewModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';

import { HttpClientModule } from '@angular/common/http';

import { SearchService } from '../service/search.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        TabViewModule,
        InputTextModule,
        RadioButtonModule,
        ButtonModule,
        TableModule,
        HttpClientModule,
      ],
      providers: [SearchService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should say /xml/DBER-1923-0416.xml on startup', () => {
    expect(component.ie).toEqual('/xml/DBER-1923-0416.xml');
  });

  it('should say /xml/DBER-1923-0416.xml on filename radio', () => {
    component.searchSpace = 'filename';
    component.radioClick();
    expect(component.ie).toEqual('/xml/DBER-1923-0416.xml');
  });

  it('should say aa84010l on digest radio', () => {
    component.searchSpace = 'digest';
    component.radioClick();
    expect(component.ie).toEqual('aa84010');
  });

  it('should say ingest/25601c39 on service radio', () => {
    component.searchSpace = 'service';
    component.radioClick();
    expect(component.ie).toEqual('ingest/25601c39');
  });
});
