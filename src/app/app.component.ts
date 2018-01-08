import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { StatusComponent } from './status/status.component';
import { XqueryComponent } from './xquery/xquery.component';
import { TabViewModule } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'XQA Query UI';
}
