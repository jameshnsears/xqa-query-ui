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
  error: string;

  searchSpace: string = 'Option 1';

  constructor(private searchService: SearchService) {
    this.searchValue = '';
  }

  search() {
    // this.error = '';
    // this.searchService.doSearch(this.searchValue)
    //   .subscribe(
    //     searchResponses => this.searchResponses = searchResponses,
    //     error => this.error = error
    //   );
  }


  ngOnInit() {
  }
}
