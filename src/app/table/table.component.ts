import { Component, OnInit } from '@angular/core';
import { ServerServiceService } from '../service/server-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  cars = [];

  constructor(
    private serverService: ServerServiceService
  ) { }

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {
    // this.serverService.getAllCars().subscribe((response) => {
    //   interface Type {
    //     [key: string]: any
    //   }
  
    //   for (let cars of response.body) {
    //     let car: Type = {};
    //     car.make = cars.make;
    //     car.model = cars.model;
    //     car.color = cars.color;
    //     car.owner = cars.owner;
    //     this.cars.push(car);
    //   }
    // })
  }

}
