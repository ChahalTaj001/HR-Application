import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user:any){
  return this.http.post<any>("https://dummyjson.com/auth/login",user);
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
}
