import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../../services/apiservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sclassdet',
  templateUrl: './sclassdet.component.html',
  styleUrls: ['./sclassdet.component.css']
})
export class SclassdetComponent implements OnInit {

  classDet : any

  constructor(private services:ApiservicesService, private rout:ActivatedRoute){}

  ngOnInit(): void {
    this.findClsDet(this.classId)
  }

  classId = this.rout.snapshot.paramMap.get('id')


  findClsDet(id:any){
    this.services.classdet(id).subscribe((data:any)=>{
      this.classDet = data.data
      console.log(this.classDet,'class detailsss');
    })
  }

}
