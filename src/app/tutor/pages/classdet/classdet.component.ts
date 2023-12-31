import { Component, OnInit } from '@angular/core';
import { TservicesService } from '../../services/tservices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-classdet',
  templateUrl: './classdet.component.html',
  styleUrls: ['./classdet.component.css']
})
export class ClassdetComponent implements OnInit{
  clsdet : any
  constructor(private services:TservicesService, private rout:ActivatedRoute,private router:Router){}
  clsId = this.rout.snapshot.paramMap.get('id') ?? ''

  ngOnInit(): void {
    this.findClsDet(this.clsId)
  }

  findClsDet(id:any){
    this.services.classDet(id).subscribe((data:any)=>{
      this.clsdet = data.data
      
    })
  }

  deleteClass(id:any){
    this.services.deleteClass(id).subscribe((data:any)=>{
      this.router.navigate(['tutor/thome'])
    })
  }
}
