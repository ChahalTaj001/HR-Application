import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router,
    private _errService:ErrorService) { }

  loginUser(user: any) {
    return this.http.post<any>("https://dummyjson.com/auth/login", user)
    .pipe(catchError(this.handleError))
      
  }
  signupUser(user: any) {
    return this.http.post<any>("https://dummyjson.com/auth/login", user);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/home'])
  }
  getToken() {
    return localStorage.getItem('token');
  }
  
  handleError(error: HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }

}