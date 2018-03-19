import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

import { RadioButtonModule } from 'primeng/radiobutton';

import { Car } from '../domain/car';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  types: SelectItem[];

  val1: string;

  selectedType: string;

  edited: string;

  cars1: Car[];

  constructor(private carService: CarService) {
    this.types = [];
    this.types.push({ label: 'service', value: 'service' });
    this.types.push({ label: 'subject', value: 'subject' });
    this.types.push({ label: 'correlationId', value: 'correlationId' });
    this.types.push({ label: 'digest', value: 'digest' });
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
