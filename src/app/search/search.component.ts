import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

import { Car } from '../domain/car';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  types: SelectItem[];

  selectedType: string;

  edited: string;

  cars1: Car[];

  constructor(private carService: CarService) {
    this.types = [];
    this.types.push({ label: 'Service', value: 'Service' });
    this.types.push({ label: 'Subject', value: 'Subject' });
    this.types.push({ label: 'CorrelationId', value: 'CorrelationId' });
    this.types.push({ label: 'sha256', value: 'sha256' });
  }

  clear() {
    this.selectedType = '';
    this.edited = '';
  }

  ok() {
  }

  ngOnInit() {
    this.carService.getCarsMedium().then(cars => this.cars1 = cars);
  }

}
