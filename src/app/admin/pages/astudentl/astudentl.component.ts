import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { adminState } from '../../interface/adminState';
import { studentListFetch } from '../../store/action';
import * as action from '../../store/action'
import {studentList} from '../../store/selector'
import { Observable } from 'rxjs';
import { aStudentState } from '../../interface/aStudentState';
import { appstateinterface } from 'src/app/appstate';

@Component({
  selector: 'app-astudentl',
  templateUrl: './astudentl.component.html',
  styleUrls: ['./astudentl.component.css']
})

export class AstudentlComponent implements OnInit {
  name: string = ''
  students !: aStudentState[]
  ngOnInit(): void {
    this.store.dispatch(action.studentListFetch())
    this.store.pipe(select(studentList)).subscribe((data)=>{
      this.students = data
    })
  }

  studentBlock(id:any){
    this.store.dispatch(action.studentBlock({id}))
  }

   constructor(private store:Store<appstateinterface>){}    
}
