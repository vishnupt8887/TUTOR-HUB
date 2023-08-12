import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { aTutorState } from '../../interface/aTutorState';
import { Store, select } from '@ngrx/store';
import { appstateinterface } from 'src/app/appstate';
import * as action from '../../store/action'
import { tutorList } from '../../store/selector';

@Component({
  selector: 'app-atutorl',
  templateUrl: './atutorl.component.html',
  styleUrls: ['./atutorl.component.css']
})
export class AtutorlComponent implements OnInit{
  name: string = ''
  tutors !: aTutorState[]
  ngOnInit(): void {
    this.store.dispatch(action.tutorListFetch())
     this.store.pipe(select(tutorList)).subscribe((data)=>{
      this.tutors =data
     })
  }

  tutorBlock(id:string){
    this.store.dispatch(action.tutorBlock({id}))
    
  }
  
  constructor(private store:Store<appstateinterface>){}


}
