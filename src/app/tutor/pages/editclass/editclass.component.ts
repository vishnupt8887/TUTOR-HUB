import { Component, OnInit } from '@angular/core';
import { TservicesService } from '../../services/tservices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editclass',
  templateUrl: './editclass.component.html',
  styleUrls: ['./editclass.component.css']
})
export class EditclassComponent implements OnInit{

  constructor(private services:TservicesService,private route:ActivatedRoute, private router:Router){}

  data:any
  classData:any

  classId = this.route.snapshot.paramMap.get('id')

  ngOnInit(): void {
    this.class(this.classId)
  }

  class(id:any){
    console.log(id)
    this.services.classdataedit(id).subscribe((data:any)=>{
      console.log(data,'class data in edit');
      this.classData = data.data
    })
  }

  formSubmit(){
    const data = this.classData
    console.log(data,'edit form data');
    this.services.classEdit(data).subscribe((data:any)=>{
      console.log(data,'form data from backend');
      if(data.success){
        this.router.navigate(['tutor/tclassdet', this.classId ]);

      }
    })
    
  }
}
