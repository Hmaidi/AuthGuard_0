import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthService , private routerSrvice: Router) {

  }
canActivate(): boolean {
  if ( this.authservice.Islogin()) {
    //   console.log(this.authservice.Islogin());
    //  this.routerSrvice.navigate(['/eventsSpec']);
    return true ;

  } else {
     this.routerSrvice.navigate(['/login']);
     console.log('false');
     return  false;
  }
}
}
