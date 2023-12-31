import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiservicesService } from '../../services/apiservices.service';

@Component({
  selector: 'app-squestionpaper',
  templateUrl: './squestionpaper.component.html',
  styleUrls: ['./squestionpaper.component.css']
})
export class SquestionpaperComponent implements OnInit{
  currentPage = 1;
  pageSize = 6;
  totalItems: number = 0
  classId=''
  question:any=[]
  questions:string=''

  ngOnInit(): void {
    this.classId =  this.activatedRoute.snapshot.paramMap.get('clsId') ?? ''
    this.fetchQuestion(this.classId)
  }
  
  fetchQuestion(id:any){
    this.service.questionFetch(id,this.currentPage, this.pageSize).subscribe((data:any)=>{
      this.question = data.data
      this.totalItems = data.totalCount;
    })
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalItems) {
    this.currentPage = page;
    this.fetchQuestion(this.classId);
  }
}

  constructor(private activatedRoute:ActivatedRoute, private service:ApiservicesService,private sanitizer: DomSanitizer){}

  // classId = this.rout.snapshot.paramMap.get('clsId') ?? '';
  tutId = this.activatedRoute.snapshot.paramMap.get('tuId') ?? ''
  
}
