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

  constructor(private searchService: SearchService) {
  }

  search() {
  }

  ngOnInit() {
    this.searchService.getSearchResponse().then(searchResponses => this.searchResponses = searchResponses);
  }

}
