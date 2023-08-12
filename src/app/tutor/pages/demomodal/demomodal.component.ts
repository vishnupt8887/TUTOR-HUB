import { Component, Output, EventEmitter, Input } from '@angular/core';
import { TservicesService } from '../../services/tservices.service';

@Component({
  selector: 'app-demomodal',
  templateUrl: './demomodal.component.html',
  styleUrls: ['./demomodal.component.css']
})
export class DemomodalComponent {
  @Output('fetch') fetch : EventEmitter<{close:boolean,fetch:boolean}> = new EventEmitter<{close:boolean,fetch:boolean}>();
  @Input('clsId') clsId !: String;
  data:any
  datas = {
    video : '',
    description : ''
  }

  closeModal() {
     ;
    
   this.fetch.emit({close:true,fetch:false})
  }
  setFile(event:any){
    this.datas.video = event.target.files[0]
     ;
    
  }
  uploadVideo(event:any){
    const formData = new FormData();
    formData.append('video', this.datas.video);
    formData.append('description', this.datas.description)
    this.service.videoAdd(formData,this.clsId).subscribe((data)=>{
      this.data=data
      this.fetch.emit({close:true,fetch:data.success})
      
    })
    
  }
  constructor(private service:TservicesService){}
}
