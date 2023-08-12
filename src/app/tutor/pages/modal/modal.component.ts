import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TservicesService } from '../../services/tservices.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
 // @Output('close') close: EventEmitter<void> = new EventEmitter<void>();
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
    this.service.assignmentAdd(formData,this.clsId).subscribe((data)=>{
      this.data=data
      this.fetch.emit({close:true,fetch:data.success})
      
    })
    
  }

  // formsubmit(){
  //   this.service.modalDiscription()
  // }
  constructor(private service:TservicesService){}
}
