import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { TabViewModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/primeng';
import { TreeTableModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { StatusComponent } from './status/status.component';
import { XqueryComponent } from './xquery/xquery.component';

import { HttpClientModule } from '@angular/common/http';

import { SearchService } from './service/search.service';
import { StatusService } from './service/status.service';


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
    ButtonModule,
    TableModule,
    HttpClientModule,
    InputTextareaModule,
    TreeTableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    SearchService,
    StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
