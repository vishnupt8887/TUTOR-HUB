import { Component } from '@angular/core';

@Component({
  selector: 'app-stoastrate',
  templateUrl: './stoastrate.component.html',
  styleUrls: ['./stoastrate.component.css']
})
export class StoastrateComponent {
  showPopup = true;
  
  closeToast() {
    this.showPopup = false;
  }
}
