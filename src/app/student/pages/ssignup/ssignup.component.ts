import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { ApiservicesService } from 'src/app/student/services/apiservices.service';
import {Store} from '@ngrx/store'
import * as action from '../../store/action'
import { appstateinterface } from 'src/app/appstate';

@Component({
  selector: 'app-ssignup',
  templateUrl: './ssignup.component.html',
  styleUrls: ['./ssignup.component.css']
})
export class SsignupComponent {
  constructor(private services:ApiservicesService,private route:Router, private store:Store<appstateinterface>){}

   signup = new FormGroup({
      'name' : new FormControl(null),
      'email' : new FormControl(null),
      'password' : new FormControl(null),
      'repassword' : new FormControl(null),
      'phone' : new FormControl(null)
    })
  
    sumbitSignup(){
      const fdata = this.signup.value
      console.log(fdata,'signupdata');
      // let student = this.store.select('studentState').subscribe((data)=>{
      //   data.user?.email
      // })
      if(fdata.password === fdata.repassword){

        this.store.dispatch(action.signup({formData:fdata}))
      }
    }
  
}
