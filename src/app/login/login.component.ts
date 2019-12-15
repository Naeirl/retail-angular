import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(username: string){
    this.loginService.login<string>(username).subscribe((loginJson) =>{
      let loginResponse = JSON.parse(loginJson);
      if(loginResponse.userType == "admin"){
        //navigate to administrator land
      } else if (loginResponse.userType == "normalUser") {
        //navigate to normal realm
      }
    });
  }
}
