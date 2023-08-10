import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent {
  constructor(private route: Router) { }

  adminlogout() {
    localStorage.clear()
    this.route.navigate(['alogin'])
  }
}
