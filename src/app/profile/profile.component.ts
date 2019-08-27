import { Component, OnInit } from '@angular/core';
import { ServerServiceService } from '../service/server-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = {
    username: sessionStorage.getItem("username"),
    address: sessionStorage.getItem("address"),
    email: sessionStorage.getItem("email"),
    companyName: sessionStorage.getItem("companyName"),
  }

  constructor(
    private serverService: ServerServiceService,
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.serverService.login(this.profile.username).subscribe(response => {
      sessionStorage.removeItem("sid")
      sessionStorage.removeItem("username")
      sessionStorage.removeItem("address")
      sessionStorage.removeItem("email")
      sessionStorage.removeItem("companyName")
      console.log(response.body)
      this._router.navigate(['signin']);
    })
  }

}
