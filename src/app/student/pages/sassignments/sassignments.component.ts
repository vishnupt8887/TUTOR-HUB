import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiservicesService } from '../../services/apiservices.service';

@Component({
  selector: 'app-sassignments',
  templateUrl: './sassignments.component.html',
  styleUrls: ['./sassignments.component.css']
})
export class SassignmentsComponent implements OnInit{
  currentPage = 1;
  pageSize = 6;
  totalItems: number = 0
  classId=''
  assignment:any=[]

  ngOnInit(): void {
    this.classId =  this.activateRout.snapshot.paramMap.get('clsId') ?? ''
    console.log(this.classId,'class iidddddd')
    this.fetchAssignment(this.classId)
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

  constructor(private  activateRout:ActivatedRoute, private service:ApiservicesService,private sanitizer: DomSanitizer){}

  tutId = this.activateRout.snapshot.paramMap.get('tuId') ?? ''
}
