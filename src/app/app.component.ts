import { Component, OnInit } from '@angular/core';
import { AuthcheckService } from './services/authcheck.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { appstateinterface } from './appstate';
import * as action from './tutor/store/action' 
import * as Action from './student/store/action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private service:AuthcheckService, private route:Router ,private store:Store<appstateinterface>){}

  ngOnInit(): void {
    this.tutorCheck()
    this.studentCheck()
  }
  title = 'ang';

  tutorCheck(){
    this.service.tutorcheck().subscribe((data:any)=>{
      let refreshToken = JSON.parse(localStorage.getItem('tutorToken') || '')
      this.store.dispatch(action.tutorcheck({data:data,token:refreshToken}))
        // this.route.navigate(['tutor/tlogin'])
    })
  }

  studentCheck(){
    this.service.studentcheck().subscribe((data:any)=>{
      let refreshToken = JSON.parse(localStorage.getItem('studentToken') || '')
      
      this.store.dispatch(Action.studentcheck({data:data,token:refreshToken}))
    })
  }
}

