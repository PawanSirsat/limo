import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { LoginuserService } from 'src/app/loginuser.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user =new User();
  msg = '';

  constructor(
    private loginuserService: LoginuserService ,
    private router: Router, 
    private fb: FormBuilder) { }

  ngOnInit(): void {

  }
  registerForm = new FormGroup({
    name : new FormControl('',[Validators.required, Validators.minLength(5),Validators.pattern("[a-zA-Z].*")]),
    emailId : new FormControl('',[Validators.email, Validators.required]),
    phone : new FormControl('',[Validators.required, Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(12)]),
    password : new FormControl('',[Validators.required, Validators.minLength(5),]),
    cpassword :new FormControl('',[Validators.required, Validators.minLength(5),]), 
  }) 

  registerUser(emailId: any){
   
    console.log(this.registerForm.value);
    this.loginuserService.registerUserRemote(this.registerForm.value).subscribe(
      data => {
        this.router.navigate(['/user-login'])
        alert("Register Successfully")
      },
      error =>{
        this.msg="Email Id already registered"
        // alert("Invalid Id Password")
      }
    );
    }

    resetForm(){
      this.registerForm.reset();
    }

  get name():any
  {  
    return this.registerForm.get('name');
  }

  get emailId() :any
  {
    return this.registerForm.get("emailId") ;
  }

  get phone():any
{
    return this.registerForm.get("phone") ;
  }

  get password():any
  {
    return this.registerForm.get("password") ;
  }

  get cpassword():any
  {
    return this.registerForm.get("cpassword") ;
  }
}
