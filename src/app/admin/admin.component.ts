import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  sideBarOpen = true;
  name1: any;
  loadedFeature: string | undefined;

  
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
   }
   
   onSelect(feature:string)
   {
     this.loadedFeature = feature;
   }
   onNavigate(id:string)
  {
    this.loadedFeature = id;
  }

  userloggedIn()
  {
     this.name1 = localStorage.getItem('token1');
     return this.name1;
  }

}
