import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiservicesService } from '../../services/apiservices.service';


@Component({
  selector: 'app-studentclass',
  templateUrl: './studentclass.component.html',
  styleUrls: ['./studentclass.component.css']
})
export class StudentclassComponent implements OnInit{
  subject:string = ''
  currentPage = 1;
  pageSize = 6;
  totalItems: number = 0
  cls:any=[]

  ngOnInit(): void {
    this.fetchCls()
  }

  fetchCls(){
    this.service.clsFetch(this.currentPage, this.pageSize).subscribe((data:any)=>{
      this.cls = data.data
      this.totalItems = data.totalCount;
    })
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalItems) {
    this.currentPage = page;
    this.fetchCls();
  }
}

  constructor(private activatedRoute:ActivatedRoute, private service:ApiservicesService,private sanitizer: DomSanitizer){}
  tutId = this.activatedRoute.snapshot.paramMap.get('tuId') ?? ''
}
