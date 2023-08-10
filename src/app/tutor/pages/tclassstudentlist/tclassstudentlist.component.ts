import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tclassstudentlist',
  templateUrl: './tclassstudentlist.component.html',
  styleUrls: ['./tclassstudentlist.component.css']
})
export class TclassstudentlistComponent {
  constructor(private activatedRoute:ActivatedRoute){}

  classId = this.activatedRoute.snapshot.paramMap.get('clsId') ?? ''
}
