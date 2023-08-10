import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-classhome',
  templateUrl: './classhome.component.html',
  styleUrls: ['./classhome.component.css']
})
export class ClasshomeComponent {
@Input('classId') classId !: String;
}
