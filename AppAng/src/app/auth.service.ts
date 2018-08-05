import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private UrlRegister = 'http://localhost:3000/api/register';
  private UrLogin = 'http://localhost:3000/api/login';

  constructor( private http: HttpClient, private routerSrvice: Router) { }

  UserEntregister(user) {
   return this.http.post<any>(this.UrlRegister, user);
  }

  UserLogin(userObjet) {
    return this.http.post<any>(this.UrLogin, userObjet);

  }

  Islogin(): boolean {

    return !!localStorage.getItem('token');

  }
  IsLogOut() {
    this.routerSrvice.navigate(['/events']) ;
       return localStorage.removeItem('token');
  }
  getTokenValue() {
      return localStorage.getItem('token');
  }
}
