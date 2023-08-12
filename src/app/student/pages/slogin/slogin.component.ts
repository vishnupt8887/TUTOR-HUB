import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appstateinterface } from 'src/app/appstate';
import { ApiservicesService } from 'src/app/student/services/apiservices.service';
import { Store, select } from '@ngrx/store';
import * as action from '../../store/action'
import { erroSelector } from '../../store/selector';

@Component({
  selector: 'app-slogin',
  templateUrl: './slogin.component.html',
  styleUrls: ['./slogin.component.css']
})
export class SloginComponent implements OnInit{

  error:String|null = ''

  constructor(private services:ApiservicesService, private route:Router, private store:Store<appstateinterface>){}

  ngOnInit(): void {
    this.store.pipe(select(erroSelector)).subscribe((data)=>{
    
        this.error= data
       })
  }

  logindata = {
    email :'',
    password :''
  }

  submitLogin(){
    const data = this.logindata
    this.services.slogin(data).subscribe(()=>{

    })
     ;
    if(data){
   this.store.dispatch(action.login({logindata:data}))

    }
  }
}
