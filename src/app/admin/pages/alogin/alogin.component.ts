import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appstate';
import { AservicesService } from '../../services/aservices.service';
import * as action from '../../store/action'
import { erroSelector } from '../../store/selector';

@Component({
  selector: 'app-alogin',
  templateUrl: './alogin.component.html',
  styleUrls: ['./alogin.component.css']
})
export class AloginComponent implements OnInit {

  error:String|null = ''

constructor(private services:AservicesService, private store:Store<appstateinterface>){}
  ngOnInit(): void {
    this.store.pipe(select(erroSelector)).subscribe((data)=>{
        console.log(data,'admin login error');
    
        this.error= data
       })
  }

  logindata = {
    email :'',
    password :''
  }

  submitLogin(){
    const data = this.logindata
    this.services.alogin(data).subscribe(()=>{

    })
    console.log(data);
    if(data){
   this.store.dispatch(action.login({logindata:data}))

    }
  }
}
