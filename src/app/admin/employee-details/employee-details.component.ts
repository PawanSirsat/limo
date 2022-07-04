import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserService } from 'src/app/loginuser.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  users!: User[];
  name:any;

  constructor(private loginuserservice: LoginuserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(){
    this.loginuserservice.listUser().subscribe(data => {
      this.users = data;
    });
  }
  Search(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.users = this.users.filter(loginuserservice => {
        return loginuserservice.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    })
  }
}

key = 'name';
reverse:boolean = false;

sort(key: string){
this.key = key;
this.reverse = !this.reverse;
}
   
 

  // updateEmployee(id: number){
  //   this.router.navigate(['usere', id]);
  // }

 
}