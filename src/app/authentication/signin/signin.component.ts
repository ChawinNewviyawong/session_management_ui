import { Component, OnInit } from '@angular/core';
import { ServerServiceService } from 'src/app/service/server-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private serverService: ServerServiceService,
    private _router: Router
  ) { }

  loginForm = {
    username: '',
    password: '',
  }

  ngOnInit() {
  }

  login() {
    this.serverService.login(this.loginForm).subscribe(response => {
      sessionStorage.setItem("sid", response.body.sessionid)
      localStorage.setItem("username", response.body.profile.Username)
      localStorage.setItem("address", response.body.profile.Address)
      localStorage.setItem("email", response.body.profile.Email)
      localStorage.setItem("companyName", response.body.profile.CompanyName)
      console.log(response.body)
      this._router.navigate(['home']);
    })
  }

}
