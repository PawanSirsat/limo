import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  employees!: Employee[];
  firstName:any;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }
  Search(){
    if(this.firstName == ""){
      this.ngOnInit();
    }else{
      this.employees = this.employees.filter(employeeService => {
        return employeeService.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
    })
  }
}

key = 'userName';
reverse:boolean = false;

sort(key: string){
this.key = key;
this.reverse = !this.reverse;
}

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  @Output() featureSelected = new EventEmitter<string>();
   
  updateEmployee(id:string)
{
  this.featureSelected.emit(id);
}

  // updateEmployee(id: number){
  //   this.router.navigate(['usere', id]);
  // }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}