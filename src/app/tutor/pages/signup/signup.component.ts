import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { appstateinterface } from 'src/app/appstate';
import * as action from '../../store/action'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private store:Store<appstateinterface>){}

  lData = {
    name : '',
    email : '',
    password : '',
    repassword : '',
    phone : ''
  }

  loginSubmit(){
    const fdata = this.lData

    if(fdata.password === fdata.repassword){
      this.store.dispatch(action.signup({formData:fdata}))
     
    }
    

  }

}
