import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiservicesService } from '../../services/apiservices.service';

@Component({
  selector: 'app-sclassin',
  templateUrl: './sclassin.component.html',
  styleUrls: ['./sclassin.component.css']
})
export class SclassinComponent implements OnInit{

  currentPage = 1;
  pageSize = 6;
  totalItems: number = 0
  classId=''
  video:any=[]

  ngOnInit(): void {
    this.classId =  this.activatedRoute.snapshot.paramMap.get('id') ?? ''
    console.log(this.classId,'class iidddddd')
    this.fetchVideo(this.classId)
  }
  fetchVideo(id:any){
    console.log(id,'hiiiii')
    this.service.videoFetch(id,this.currentPage, this.pageSize).subscribe((data:any)=>{
      console.log(data,'new ddddd');
      this.video = data.data
      this.totalItems = data.totalCount;
      console.log(this.video,'video data');
    })
  }

  onPageChange(page: number) {
    console.log(page,'helo....',this.totalItems)
    if (page >= 1 && page <= this.totalItems) {
    this.currentPage = page;
    this.fetchVideo(this.classId);
  }
}
  
  tutId = this.activatedRoute.snapshot.paramMap.get('tuId')

  constructor(private activatedRoute:ActivatedRoute, private service:ApiservicesService,private sanitizer: DomSanitizer){}
}
