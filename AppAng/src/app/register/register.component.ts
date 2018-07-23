import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { error } from '../../../node_modules/@angular/compiler/src/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  resgisterDataUser = { };
  constructor(private authsevice: AuthService) { }

  ngOnInit() {
  }

  EnregistrerData() {
    // this.resgisterDataUser = this.resgisterDataUser;
    // console.log( this.resgisterDataUser);
    this.authsevice.UserEntregister(this.resgisterDataUser)
    .subscribe(
      res => console.log(res),
      err => console.log(error)
    ) ;
  }

}
