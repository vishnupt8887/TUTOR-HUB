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
    console.log('close videomodal');
    
   this.fetch.emit({close:true,fetch:false})
  }
  setFile(event:any){
    this.datas.video = event.target.files[0]
    console.log('video');
    
  }
  uploadVideo(event:any){
    console.log('entered video upload');
    const formData = new FormData();
    formData.append('video', this.datas.video);
    formData.append('description', this.datas.description)
    console.log(formData,'formData');
    this.service.videoAdd(formData,this.clsId).subscribe((data)=>{
      console.log(data,'video upload dattaaaa');
      this.data=data
      this.fetch.emit({close:true,fetch:data.success})
      console.log('data success',data.success);
      
    })
    
  }
  constructor(private service:TservicesService){}
}
