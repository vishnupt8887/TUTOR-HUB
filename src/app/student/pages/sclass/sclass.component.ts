import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../../services/apiservices.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sclass',
  templateUrl: './sclass.component.html',
  styleUrls: ['./sclass.component.css']
})
export class SclassComponent implements OnInit{
  class:any
  data:any
  subject:string = ''
  currentPage = 1;
  pageSize = 6;
  totalItems: number = 0

  constructor(private service:ApiservicesService) {}

  ngOnInit(): void {
    // this.findClass()
    this.fetchData()
  }

  // findClass(){
  //   this.service.classdata().subscribe((data:any)=>{
  //     this.class = data.data
  //     console.log(this.class,'class data');
  //   })
  // }

  fetchData() {
    this.service.getPaginatedData(this.currentPage, this.pageSize)
      .subscribe((data:any) => {
        this.class = data.data;
        this.totalItems = data.totalCount;
        console.log(this.class,'class data');
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
