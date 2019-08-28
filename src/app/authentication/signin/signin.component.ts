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
    if (this.loginForm.username && this.loginForm.password) {
      this.serverService.login(this.loginForm).subscribe(response => {
        sessionStorage.setItem("sid", response.body.sessionid)
        sessionStorage.setItem("username", response.body.profile.Username)
        sessionStorage.setItem("address", response.body.profile.Address)
        sessionStorage.setItem("email", response.body.profile.Email)
        sessionStorage.setItem("companyName", response.body.profile.CompanyName)
        sessionStorage.setItem("role", response.body.profile.Role)
        console.log(response.body)
        this._router.navigate(['home']);
      })
    }
  }

}
