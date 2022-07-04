import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user = new User();
  msg = '';
  
  constructor(private loginuserservice: LoginuserService , private router: Router,) { }

  ngOnInit(): void
   { }

  userLogin(emailId: any){
  this.loginuserservice.loginUserRemote(this.user).subscribe(
    data => {
      localStorage.setItem('token', emailId);
      this.router.navigate([''])
      alert("Successfully Login")
    },
    error =>{
      this.msg="Invalid Id Password, Please Enter valid Id Password"
      // alert("Invalid Id Password")
    }
  )

  }

  // loggedIn(){
  //   return localStorage.getItem
  // }
  
}
