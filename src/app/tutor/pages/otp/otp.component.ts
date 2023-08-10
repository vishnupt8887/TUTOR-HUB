import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as action from '../../store/action'
import { appstateinterface } from 'src/app/appstate';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {

  isLoading:boolean=false
  code!:string
   
     // exTime.setMinutes(exTime.getMinutes() + 1.5);
 authSubmit(data:NgForm){
if(this.seconds>=0){
const values = data.value
this.code = values.f + values.s + values.t + values.fr
const code =  this.code
console.log(code,'cdddddd');


this.store.dispatch(action.otpVerify({otp:code}))
}


 }
 resend(){
  this.store.dispatch(action.otpstart())
   clearInterval(this.setTimout)
   this.timer()
  // this.seconds =  90000
  const code =  this.code
  if(code){
    this.store.dispatch(action.otpVerify({otp:code}))
  }
  
 }
   
 constructor(private store:Store<appstateinterface>){}

 setTimout:any;
 seconds = 90000;
 min!:number
 sec!:number
 timer(){
      this.seconds = 90000
     this.setTimout = setInterval(()=>{
      this.seconds -=1000;
      // to remove
      if(this.seconds>0){
        this.min = Math.floor((this.seconds/1000/60) << 0);
        this.sec = Math.floor((this.seconds/1000) % 60);
      }
      
    else{
      clearInterval(this.setTimout)
    }

      
      //remove
     },1000)

 }

ngOnInit(): void {
 this.timer()
}

}
