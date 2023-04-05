import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
interface LoginData {
  username : string,
  password : string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginUserData: LoginData = {
    username: '',
    password: ''
  }
  constructor(private _auth: AuthService, private _router: Router) {}
  ngOnInit(): void {
   
  }
  loginUser(){
      this._auth.loginUser(this.loginUserData)
      .subscribe(
        res=> {
          localStorage.setItem('token',res.token)
          this._router.navigate(['/home'])
          console.log(res)
        },
        err => console.log(err)
        )
  }
}
