import { Component, OnInit } from '@angular/core';

import { SearchResponse } from '../domain/search.response';
import { SearchService } from '../service/search.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchValue: string;
  searchSpace = 'filename';
  ie = '/xml/DBER-1923-0416.xml';
  error: string;
  searchResponses: SearchResponse[];

  constructor(private searchService: SearchService, public appComponent: AppComponent) {
    this.searchValue = '';
  }

  search() {
    console.log(this.searchSpace);
    this.error = '';
    this.searchResponses = [];
    this.searchService.doSearch(this.searchSpace, this.searchValue, this.appComponent.k8sIP)
      .subscribe(
        searchResponses => this.searchResponses = searchResponses['searchResponse'],
        error => this.error = error
      );
  }

  radioClick() {
    switch (this.searchSpace) {
      case 'filename': {
        this.ie = '/xml/DBER-1923-0416.xml';
        break;
      }
      case 'digest': {
        this.ie = 'aa84010';
        break;
      }
      case 'service': {
        this.ie = 'ingest/25601c39';
        break;
      }
    }

  }

  ngOnInit() {
  }
}
