import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { XQueryComponent } from './xquery/xquery.component';
import { TabViewModule } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'XQA';
}
