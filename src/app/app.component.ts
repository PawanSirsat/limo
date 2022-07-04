import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'limo';
  name: any;

  loggedIn()
  {
     // this.name = this.route.snapshot.params['name'];
     this.name = localStorage.getItem('token1');
     return this.name;
  }
}
