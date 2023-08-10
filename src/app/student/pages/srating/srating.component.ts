import { Component } from '@angular/core';
import { ApiservicesService } from '../../services/apiservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-srating',
  templateUrl: './srating.component.html',
  styleUrls: ['./srating.component.css']
})
export class SratingComponent {
  
  classId = this.activateRout.snapshot.paramMap.get('clsId') ?? ''
  tutId = this.activateRout.snapshot.paramMap.get('tuId') ?? ''

  showPopup = false
  review = {
    _id:this.classId,
    star : 0,
    comment : ''
  }
click(val:number){
  this.review.star = val
}
submitForm(){
  const data = this.review
  this.service.reviewSubmit(data).subscribe((data)=>{
    console.log(data,'review data success');
    if(data.data.success){
      this.showPopupMessage()
    }
  })
}

showPopupMessage() {
  this.showPopup = true;
}

constructor(private service:ApiservicesService, private activateRout:ActivatedRoute){}
}
