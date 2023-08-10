import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TservicesService } from '../../services/tservices.service';

@Component({
  selector: 'app-tassignments',
  templateUrl: './tassignments.component.html',
  styleUrls: ['./tassignments.component.css']
})
export class TassignmentsComponent implements OnInit{
  currentPage = 1;
  pageSize = 6;
  totalItems: number = 0
  classId=''
  constructor(private activatedRoute:ActivatedRoute, private service:TservicesService,private sanitizer: DomSanitizer){}
  ngOnInit(): void {
    this.classId =  this.activatedRoute.snapshot.paramMap.get('clsId') ?? ''
    console.log(this.classId,'class iidddddd')
    this.fetchAssignment(this.classId)
  }
  isModalOpen = false;
  assignment:any=[]



  openModal() {
    this.isModalOpen = true;
  }

  
  fetch(status:{close:boolean,fetch:boolean}){
    console.log('fetchinggggggg',status);
    
    if(status.fetch) this.fetchAssignment(this.classId)
    if(status.close)  this.isModalOpen = false;
  }

  fetchAssignment(id:any){
    console.log(id,'hiiiii')
    this.service.assignmentFetch(id,this.currentPage, this.pageSize).subscribe((data:any)=>{
      console.log(data,'new ddddd');
      this.assignment = data.data
      this.totalItems = data.totalCount;
      console.log(this.assignment,'assignment data');
    })
  }
  
  onPageChange(page: number) {
    console.log(page,'helo....',this.totalItems)
    if (page >= 1 && page <= this.totalItems) {
      this.currentPage = page;
      this.fetchAssignment(this.classId);
    }
  }
  
  delete(id:string){
    this.service.assignmentDelete(id,this.classId).subscribe((data)=>{
      console.log('delete assignment');
      this.fetchAssignment(this.classId)
    })
    }
}
