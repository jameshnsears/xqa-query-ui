import { Component, OnInit } from '@angular/core';

import { RadioButtonModule } from 'primeng/radiobutton';


import {TableModule} from 'primeng/table';


import { Car } from '../domain/car';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  val1: string;

  selectedType: string;

  edited: string;

  cars: Car[];

  constructor(private carService: CarService) {
  }

  clear() {
    this.selectedType = '';
    this.edited = '';
  }

  ok() {
  }

  ngOnInit() {
    this.carService.getCarsMedium().then(cars => this.cars = cars);
  }

}
