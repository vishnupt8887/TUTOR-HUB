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
    console.log('clsssmodal');
    
   this.fetch.emit({close:true,fetch:false})
  }
  setFile(event:any){
    this.datas.pdf = event.target.files[0]
    console.log('pdffffffffff');
    
  }
  uploadPdf(event:any){
    console.log('entered');
    const formData = new FormData();
    formData.append('pdf', this.datas.pdf);
    formData.append('description', this.datas.description)
    console.log(formData,'formData');
    this.service.assignmentAdd(formData,this.clsId).subscribe((data)=>{
      console.log(data,'dattaaaa');
      this.data=data
      this.fetch.emit({close:true,fetch:data.success})
      console.log('emittinf',data.success);
      
    })
    
  }

  // formsubmit(){
  //   this.service.modalDiscription()
  // }
  constructor(private service:TservicesService){}
}
