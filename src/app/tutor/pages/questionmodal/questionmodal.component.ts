import { Component, Output, EventEmitter, Input  } from '@angular/core';
import { TservicesService } from '../../services/tservices.service';

@Component({
  selector: 'app-questionmodal',
  templateUrl: './questionmodal.component.html',
  styleUrls: ['./questionmodal.component.css']
})
export class QuestionmodalComponent {
  @Output('fetch') fetch : EventEmitter<{close:boolean,fetch:boolean}> = new EventEmitter<{close:boolean,fetch:boolean}>();
  @Input('clsId') clsId !: String;
  data:any
  datas = {
    pdf : '',
    description : ''
  }

  closeModal() {
    
   this.fetch.emit({close:true,fetch:false})
  }
  setFile(event:any){
    this.datas.pdf = event.target.files[0]
    
  }
  uploadPdf(event:any){
    const formData = new FormData();
    formData.append('pdf', this.datas.pdf);
    formData.append('description', this.datas.description)
    this.service.questionAdd(formData,this.clsId).subscribe((data)=>{
      this.data=data
      this.fetch.emit({close:true,fetch:data.success})
      
    })
    
  }
  constructor(private service:TservicesService){}
}
