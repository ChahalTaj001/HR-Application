import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user:any){
  return this.http.post<any>("https://dummyjson.com/auth/login",user)
  .pipe(catchError(this.handleError))
  }
  signupUser(user:any){
   return this.http.post<any>("https://dummyjson.com/auth/login",user);
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
  private handleError(error: HttpErrorResponse) {
    let errormessage = ''
  if (error.status === 0) {
    console.error('An error occurred:', error.error);
  } else {
    console.error(
       errormessage = `Backend returned code ${error.status}, body was: `, error.error);
  }
  errormessage+= 'Something bad happened; please try again later.'
  return throwError(() => new Error(errormessage));
}
}
