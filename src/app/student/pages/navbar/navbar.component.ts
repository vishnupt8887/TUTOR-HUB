import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class SnavbarComponent {
  open = false

  studentLogout(){
    localStorage.clear()
  this.route.navigate(['/slogin'])
  }

  constructor(private route:Router){}
}
