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
  videos:string = ''

  ngOnInit(): void {
    this.classId =  this.activatedRoute.snapshot.paramMap.get('id') ?? ''
    this.fetchVideo(this.classId)
  }
  fetchVideo(id:any){
     
    this.service.videoFetch(id,this.currentPage, this.pageSize).subscribe((data:any)=>{
      this.video = data.data
      this.totalItems = data.totalCount;
    })
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalItems) {
    this.currentPage = page;
    this.fetchVideo(this.classId);
  }
}
  
  tutId = this.activatedRoute.snapshot.paramMap.get('tuId')

  constructor(private activatedRoute:ActivatedRoute, private service:ApiservicesService,private sanitizer: DomSanitizer){}
}
