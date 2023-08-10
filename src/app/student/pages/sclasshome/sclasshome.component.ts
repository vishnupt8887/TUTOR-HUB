import { Component, Input, OnInit } from '@angular/core';
import { ApiservicesService } from '../../services/apiservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sclasshome',
  templateUrl: './sclasshome.component.html',
  styleUrls: ['./sclasshome.component.css']
})
export class SclasshomeComponent implements OnInit {
  @Input('tutorId')  tutorId !: any
  @Input('classId')  classId !: any
  cls : any

  constructor(private services:ApiservicesService, private rout:ActivatedRoute){}
  clsId = this.rout.snapshot.paramMap.get('id')

  ngOnInit(): void {
    this.class(this.clsId)
    console.log(this.tutorId,"tutor id");
    console.log(this.classId,"classId");
    
    
  }

  class(id:any){
    this.services.classIn(id).subscribe((data:any)=>{
      console.log(data,'cls data');
      this.cls = data.data 
      console.log(this.cls,'class data');
    })
  }
}
