import { Component, OnInit } from '@angular/core';

import { SearchResponse } from '../domain/search.response';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchValue: string;
  searchResponses: SearchResponse[];

  error: any;

  constructor(private searchService: SearchService) {
    this.searchValue = '';
  }

  search() {
    this.searchService.getConfig(this.searchValue)
    .then(
      searchResponses => this.searchResponses = searchResponses,
      error => this.error = error
    );
  }

  ngOnInit() {
    //this.searchService.getSearchResponse(this.searchValue).then(searchResponses => this.searchResponses = searchResponses);
  }

}
