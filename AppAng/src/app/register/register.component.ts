import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  resgisterDataUser = { };
  constructor(private authsevice: AuthService, private routerSrvice: Router) { }

  ngOnInit() {
  }

  EnregistrerData() {
    // this.resgisterDataUser = this.resgisterDataUser;
    // console.log( this.resgisterDataUser);
    this.authsevice.UserEntregister(this.resgisterDataUser)
    .subscribe(
      res => {
        // console.log(res);
        localStorage.setItem('token', res.token);
         this.routerSrvice.navigate(['/events']);
      },
      err => console.log(err)
    ) ;
  }

}
