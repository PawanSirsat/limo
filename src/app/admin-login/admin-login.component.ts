import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from '../admin';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin = new Admin();
  msg = '';

  constructor(private loginuserservice: LoginuserService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  adminLogin(emailId: any){
    this.loginuserservice.loginAdminRemote(this.admin).subscribe(
      data => {
        this.router.navigate(['admin'])
        localStorage.setItem('token1', emailId);

        this.toastr.success('Successfully LoggedIn !',emailId, { timeOut:3000 } );
      },
      error =>{
        this.toastr.error('Invalid !');
        // alert("Invalid Id Password")
      }
    )
  
    }

}
