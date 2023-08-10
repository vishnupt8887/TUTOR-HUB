import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TservicesService } from '../../services/tservices.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor(private service:TservicesService,private router:ActivatedRoute, private route : Router){}

  data:any
  ngOnInit(): void {}

  tutorId = this.router.snapshot.paramMap.get('id') 

  createClass = {
    subject:'',
    class:'',
    chapter:'',
    time:'',
    price:''
  }

  formSubmit(){
    const data=this.createClass
    console.log(data,'classs forrmm');
    this.service.classCreate(data).subscribe((data:any)=>{
      console.log(data,"FORM+++++++++++++++");
      if(data.success){
        this.route.navigate(['tutor/tclassdet',data.data._id])
      }
    })
  }

}
