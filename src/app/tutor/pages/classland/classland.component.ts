import { Component, OnInit } from '@angular/core';
import { TservicesService } from '../../services/tservices.service';

@Component({
  selector: 'app-classland',
  templateUrl: './classland.component.html',
  styleUrls: ['./classland.component.css']
})
export class  ClasslandComponent  implements OnInit{

  tutor:any
  clas:any=[]
  cls:any
  subject:string=''
  currentPage = 1;
  pageSize = 6;
  totalItems: number = 0

  constructor(private services:TservicesService){}

  ngOnInit():void{

    this.tutors()
    this.fetchData()
  }

  tutors(){
    this.services.tutorData().subscribe((data:any)=>{
      console.log(data,'tutor data');
      this.tutor = data.data
    })
  }

  fetchData() {
    this.services.getPaginatedData(this.currentPage, this.pageSize)
      .subscribe((data:any) => {
        this.clas = data.data;
        this.totalItems = data.totalCount;
        console.log(this.clas,'class data');
        console.log(this.totalItems,'class totalCount');
      });
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalItems) {
    this.currentPage = page;
    this.fetchData();
  }
}

}

