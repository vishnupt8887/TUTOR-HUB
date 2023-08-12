import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TservicesService } from '../../services/tservices.service';

@Component({
  selector: 'app-tclassstudentlist',
  templateUrl: './tclassstudentlist.component.html',
  styleUrls: ['./tclassstudentlist.component.css']
})
export class TclassstudentlistComponent {
  constructor(private activatedRoute:ActivatedRoute, private service:TservicesService){}
  names:string=''
  currentPage = 1;
  pageSize = 6;
  totalItems: number = 0
  classId=''
  students:any=[]
  // classId = this.activatedRoute.snapshot.paramMap.get('clsId') ?? ''

  ngOnInit(): void {
    this.classId =  this.activatedRoute.snapshot.paramMap.get('clsId') ?? ''
    this.fetchStudents(this.classId)
  }

  fetchStudents(id:any){
    this.service.studentsFetch(id,this.currentPage, this.pageSize).subscribe((data:any)=>{
      this.students = data.data
      this.totalItems = data.totalCount;
    })
  }
  
  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalItems) {
      this.currentPage = page;
      this.fetchStudents(this.classId);
    }
  }
}
