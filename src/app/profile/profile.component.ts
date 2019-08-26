import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = {
    username: localStorage.getItem("username"),
    address: localStorage.getItem("address"),
    email: localStorage.getItem("email"),
    companyName: localStorage.getItem("companyName"),
  }

  constructor() { }

  ngOnInit() {
  }

}
