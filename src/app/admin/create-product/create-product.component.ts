import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  name: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleSidebar() 
  {
    this.toggleSidebarForMe.emit();
  }

  onlogout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
