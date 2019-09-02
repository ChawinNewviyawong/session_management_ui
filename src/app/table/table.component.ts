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
  permission = {
    add: "",
    query: "",
    submit: "",
    approve: "",
    reject: "",
    cancel: "",
    complete: "",
  }
  add;
  query;
  submit;
  approve;
  reject;
  cancel;
  complete;

  constructor(
    private serverService: ServerServiceService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.checkedPermission(this.role)
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

  checkedPermission(role) {
    this.serverService.getPermission().subscribe(response => {
      interface Type {
        [key: string]: any
      }

      for (let permissions of response.body) {
        console.log(permissions)
        let permission: Type = {}
        permission.name = permissions.name
        permission.Permission = permissions.Permission
        this.permission[permission.name] = permission.Permission
      }

      console.log(this.permission)

      if ((parseInt(this.permission.add) & parseInt(role)) != 0) this.add = true
      if ((parseInt(this.permission.query) & parseInt(role)) != 0) this.query = true
      if ((parseInt(this.permission.submit) & parseInt(role)) != 0) this.submit = true
      if ((parseInt(this.permission.approve) & parseInt(role)) != 0) this.approve = true
      if ((parseInt(this.permission.reject) & parseInt(role)) != 0) this.reject = true
      if ((parseInt(this.permission.cancel) & parseInt(role)) != 0) this.cancel = true
      if ((parseInt(this.permission.complete) & parseInt(role)) != 0) this.complete = true

      if (this.query) {
        this.getAllCars();
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
