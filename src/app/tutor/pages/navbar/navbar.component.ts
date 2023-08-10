import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
open = false

constructor(private route:Router){}

tutorLogout(){
  localStorage.clear()
  this.route.navigate(['/tlogin'])
}

}
