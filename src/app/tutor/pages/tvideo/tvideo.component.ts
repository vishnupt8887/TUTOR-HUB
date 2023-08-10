import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TservicesService } from '../../services/tservices.service';

@Component({
  selector: 'app-tvideo',
  templateUrl: './tvideo.component.html',
  styleUrls: ['./tvideo.component.css']
})
export class TvideoComponent {
  
  
  currentPage = 1;
  pageSize = 6;
  totalItems: number = 0
  classId=''
  constructor(private activatedRoute:ActivatedRoute, private service:TservicesService,private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    this.classId =  this.activatedRoute.snapshot.paramMap.get('clsId') ?? ''
    console.log(this.classId,'class iidddddd')
    this.fetchVideo(this.classId)
  }
  isModalOpen = false;
  video:any=[]



  openModal() {
    this.isModalOpen = true;
  }

  

  fetch(status:{close:boolean,fetch:boolean}){
    console.log('fetchinggggggg',status);
    
    if(status.fetch) this.fetchVideo(this.classId)
    if(status.close)  this.isModalOpen = false;
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

  delete(id:string){
    this.service.videoDelete(id,this.classId).subscribe((data)=>{
      console.log('delete video');
      this.fetchVideo(this.classId)
    })
    }
}
