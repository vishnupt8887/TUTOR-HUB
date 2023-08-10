import { Component, OnInit } from '@angular/core';
import { TservicesService } from '../../services/tservices.service';
import { appstateinterface } from 'src/app/appstate';
import { Store, select } from '@ngrx/store';
import * as action from '../../store/action'
import { erroSelector } from 'src/app/tutor/store/selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  error:String|null = ''

constructor(private services:TservicesService, private store:Store<appstateinterface>){}

ngOnInit(): void {
  this.store.pipe(select(erroSelector)).subscribe((data)=>{
      console.log(data,'Tutor login error');
  
      this.error= data
     })
}

  logindata = {
    email :'',
    password :''
  }

  submitLogin(){
    const data = this.logindata
    this.services.tlogin(data).subscribe(()=>{

    })
    console.log(data);
    if(data){
   this.store.dispatch(action.login({logindata:data}))

    }
  }
}
