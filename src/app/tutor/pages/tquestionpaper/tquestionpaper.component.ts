import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TservicesService } from '../../services/tservices.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tquestionpaper',
  templateUrl: './tquestionpaper.component.html',
  styleUrls: ['./tquestionpaper.component.css']
})
export class TquestionpaperComponent implements OnInit{
  questions:string=''
  currentPage = 1;
  pageSize = 6;
  totalItems: number = 0
  classId=''
  constructor(private activatedRoute:ActivatedRoute, private service:TservicesService,private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    this.classId =  this.activatedRoute.snapshot.paramMap.get('clsId') ?? ''
    this.fetchQuestion(this.classId)
  }
  isModalOpen = false;
  question:any=[]

  
  openModal() {
    this.isModalOpen = true;
  }

  

  fetch(status:{close:boolean,fetch:boolean}){
    
    if(status.fetch) this.fetchQuestion(this.classId)
    if(status.close)  this.isModalOpen = false;
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
  
  delete(id:string){
  this.service.questionDelete(id,this.classId).subscribe((data)=>{
    this.fetchQuestion(this.classId)
  })
  }
  
  // constructor(private activatedRoute:ActivatedRoute){}
  
  // classId = this.activatedRoute.snapshot.paramMap.get('clsId') ?? ''
}
