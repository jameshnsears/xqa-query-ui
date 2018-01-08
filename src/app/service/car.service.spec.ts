import { TestBed, inject } from '@angular/core/testing';

import { CarService } from './car.service';

import { HttpClientModule } from '@angular/common/http';

describe('CarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CarService]
    });
  });

  it('should be created', inject([CarService], (service: CarService) => {
    expect(service).toBeTruthy();
  }));
});
