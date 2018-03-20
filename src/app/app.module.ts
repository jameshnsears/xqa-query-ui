import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { SelectButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/radiobutton';

import {TableModule} from 'primeng/table';

import { DataTableModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { TreeTableModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { StatusComponent } from './status/status.component';
import { XqueryComponent } from './xquery/xquery.component';
import { CarService } from './service/car.service';
import { NodeService } from './service/node.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    StatusComponent,
    XqueryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TabViewModule,
    GrowlModule,
    ChartModule,
    CalendarModule,
    ButtonModule,
    SelectButtonModule,
    RadioButtonModule,
    DataTableModule,
    TableModule,
    HttpClientModule,
    InputTextareaModule,
    TreeTableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    CarService,
    NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
