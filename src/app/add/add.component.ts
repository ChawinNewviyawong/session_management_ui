import { Component, OnInit } from '@angular/core';
import { ServerServiceService } from '../service/server-service.service';
import { Router } from '@angular/router';
import $ from 'jquery';
import 'bootstrap';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private serverService: ServerServiceService,
    private _router: Router,
  ) { }

  car = {
    key: "",
    make: "",
    model: "",
    colour: "",
    owner: "",
  }
  message = "";

  ngOnInit() {
  }

  addCar() {
    this.serverService.addCar(this.car).subscribe((response) => {
      console.log(response.body)
      this._router.navigate(['home']);
    }// , error => {
    //   console.log(error)
    //   if (error.status == 401) {
    //     this.message = error.message;
    //     $('#myModal').modal('show')
    //   }
    // }
    )
  }

  close() {
    $('#myModal').modal('hide')
    this._router.navigate(['home'])
  }

}
