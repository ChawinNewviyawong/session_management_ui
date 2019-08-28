import { Component, OnInit } from '@angular/core';
import { ServerServiceService } from '../service/server-service.service';
import { Router } from '@angular/router';
import $ from 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  cars = [];
  message = "";
  role = sessionStorage.getItem('role')

  constructor(
    private serverService: ServerServiceService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {
    this.serverService.getAllCars().subscribe((response) => {
      interface Type {
        [key: string]: any
      }

      for (let cars of response.body.cars.Message) {
        console.log(cars)
        let car: Type = {};
        car.make = cars.Record.Make;
        car.model = cars.Record.Model;
        car.color = cars.Record.Colour;
        car.owner = cars.Record.Owner;
        this.cars.push(car);
      }

    }, error => {
      console.log(error)
      if (error.status == 401) {
        this.message = error.message;
        $('#myModal').modal('show')
      }
    })
  }

  gotoAdd() {
    this._router.navigate(['add']);
  }

  gotoLogin() {
    $('#myModal').modal('hide')
    this._router.navigate(['signin'])
  }

}
