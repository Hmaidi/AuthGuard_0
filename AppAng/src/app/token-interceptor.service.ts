import { Injectable, Injector  } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector: Injector) { }

  intercept(req, next) {
    const  InjectorValue = this.injector.get(AuthService);
     const  IntenizedReq = req.clone({
       setHeaders: {
        Authorization: `Bearer ${ InjectorValue.getTokenValue()}`
       }
     });
    return next.handle(IntenizedReq);

  }
}
