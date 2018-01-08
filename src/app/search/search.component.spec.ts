import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { SelectButtonModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';

import { CarService } from '../service/car.service';

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
        ButtonModule,
        SelectButtonModule,
        DataTableModule,
        HttpClientModule
      ],
      providers: [CarService]
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
});
