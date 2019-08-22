import { Component, OnInit } from '@angular/core';
import { ServerServiceService } from 'src/app/service/server-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private serverService: ServerServiceService
  ) { }

  loginForm = {
    username: '',
    password: '',
  }

  ngOnInit() {
  }

  login() {

  }

}
