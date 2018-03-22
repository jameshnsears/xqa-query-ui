import { Component, OnInit } from '@angular/core';

import { SearchResponse } from '../domain/search.response';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchValue: string;

  cars: SearchResponse[];

  constructor(private carService: CarService) {
  }

  search() {
  }

  ngOnInit() {
    this.carService.getCarsMedium().then(cars => this.cars = cars);
  }

}
