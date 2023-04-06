import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { LoginModel } from './login.model';
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
 
  errormessage : null;
  formLogin !: FormGroup;
  loginModelObj : LoginModel = new LoginModel()
  loginUserData: LoginData = {
    username: '',
    password: ''
  }
  constructor(private _auth: AuthService, private _router: Router, private formBuilder : FormBuilder) {}
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: '',
      password: ''
    })
    }

    


  loginUser(){
    this.loginModelObj.username = this.formLogin.value.username;
    this.loginModelObj.password = this.formLogin.value.password;;
      this._auth.loginUser(this.loginModelObj)
      .subscribe(
        res=> {
          localStorage.setItem('token',res.token)
          this._router.navigate(['/home'])
          console.log(res)
        },
        err => {
        this.errormessage = err;
          console.log(err)
        }
        )
  }
}
