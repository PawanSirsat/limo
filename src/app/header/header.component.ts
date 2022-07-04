import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: any;
  name2: any;
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    // this.name = this.route.snapshot.params['name'];
  }

  loggedIn()
  {
    // this.name = this.route.snapshot.params['name'];
     this.name = localStorage.getItem('token');
     return this.name;
     
  }

  // adminloggedIn()
  // {
    
  //    this.name2 = localStorage.getItem('token1');
  //    return this.name2;
  // }

  onlogout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
