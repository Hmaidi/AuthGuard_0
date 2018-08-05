import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginUserData = { };

  constructor( private serviceLogin: AuthService, private routerSrvice: Router) { }

  ngOnInit() {
  }
  LoginUser() {
     /// console.log(this.loginUserData);
     this.serviceLogin.UserLogin(this.loginUserData)
     .subscribe(
      res => {
      //  console.log(res);
        localStorage.setItem('token', res.token);
        this.routerSrvice.navigate(['/eventsSpec']);
      },
       err => console.log(err)
     );

  }
}
