import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupUserData : any = {}
  constructor(private _Auth: AuthService) { }
  ngOnInit(): void {
  }
  
  signupUser() {
    this._Auth.signupUser(this.signupUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
