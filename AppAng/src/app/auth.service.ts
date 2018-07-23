import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private UrlRegister = 'http://localhost:3000/api/register';
  constructor( private http: HttpClient) { }

  UserEntregister(user) {
   return this.http.post(this.UrlRegister, user);
  }
}
