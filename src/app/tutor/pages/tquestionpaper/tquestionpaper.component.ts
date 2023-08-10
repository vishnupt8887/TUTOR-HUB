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
  currentPage = 1;
  pageSize = 6;
  totalItems: number = 0
  classId=''
  constructor(private activatedRoute:ActivatedRoute, private service:TservicesService,private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    this.classId =  this.activatedRoute.snapshot.paramMap.get('clsId') ?? ''
    console.log(this.classId,'class iidddddd')
    this.fetchQuestion(this.classId)
  }
  isModalOpen = false;
  question:any=[]

  
  openModal() {
    this.isModalOpen = true;
  }

  

  fetch(status:{close:boolean,fetch:boolean}){
    console.log('fetching question',status);
    
    if(status.fetch) this.fetchQuestion(this.classId)
    if(status.close)  this.isModalOpen = false;
  }

  fetchQuestion(id:any){
    console.log(id,'hiiiii')
    this.service.questionFetch(id,this.currentPage, this.pageSize).subscribe((data:any)=>{
      console.log(data,'new ddddd');
      this.question = data.data
      this.totalItems = data.totalCount;
      console.log(this.question,'question data');
    })
  }
  
  onPageChange(page: number) {
    console.log(page,'helo....',this.totalItems)
    if (page >= 1 && page <= this.totalItems) {
      this.currentPage = page;
      this.fetchQuestion(this.classId);
    }
  }
  
  delete(id:string){
  this.service.questionDelete(id,this.classId).subscribe((data)=>{
    console.log('delete question');
    this.fetchQuestion(this.classId)
  })
  }
  
  // constructor(private activatedRoute:ActivatedRoute){}
  
  // classId = this.activatedRoute.snapshot.paramMap.get('clsId') ?? ''
}
