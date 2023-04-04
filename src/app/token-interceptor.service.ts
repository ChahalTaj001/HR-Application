import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req:any, next:any){
    let _auth = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${_auth.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
