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
  assignments:string = ''

  ngOnInit(): void {
    this.classId =  this.activateRout.snapshot.paramMap.get('clsId') ?? ''
    this.fetchAssignment(this.classId)
  }

  fetchAssignment(id:any){
    this.service.assignmentFetch(id,this.currentPage, this.pageSize).subscribe((data:any)=>{
      this.assignment = data.data
      this.totalItems = data.totalCount;
    })
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalItems) {
    this.currentPage = page;
    this.fetchAssignment(this.classId);
  }
}

  constructor(private  activateRout:ActivatedRoute, private service:ApiservicesService,private sanitizer: DomSanitizer){}

  tutId = this.activateRout.snapshot.paramMap.get('tuId') ?? ''
}
