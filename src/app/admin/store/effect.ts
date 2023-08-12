import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import * as Action from './action'
import { Router } from "@angular/router";
import { AservicesService } from "../services/aservices.service";
import { HttpClient } from "@angular/common/http";
import { appstateinterface } from "src/app/appstate";
import { Store } from "@ngrx/store";
import { aStudentState } from "../interface/aStudentState";
import { aTutorState } from "../interface/aTutorState";
const localhost = 'http://localhost:3000'

@Injectable()
export class adminEffect {
   login = createEffect(() => {
      return this.actions$.pipe(ofType(Action.login), mergeMap((action) => {
         return this.aservice.alogin(action.logindata).pipe(map((data) => {
            if (data.success) {
               return Action.loginsuccess({ data: data.data, token: data.token })
            } else {
               return Action.loginfailure({ error: (data.error as string) })
            }

         }))
      }))
   })

   loginSuccess = createEffect(() => {
      return this.actions$.pipe(ofType(Action.loginsuccess), tap((data) => {
          ;

         localStorage.setItem('adminToken',JSON.stringify(data.token))
         this.route.navigate(['/admin/ahome'])
      }))
   }, { dispatch: false })

   studentListStart = createEffect(() => {
      return this.actions$.pipe(ofType(Action.studentListFetch), switchMap(() => {
         return this.http.get<aStudentState[]>(`${localhost}/admin/studentLt`).pipe(map((result: aStudentState[]) => {
            return Action.studentListFetchSuccess({ students: result })
         }))
      }))
   })

   tutorListStart = createEffect(() => {
      return this.actions$.pipe(ofType(Action.tutorListFetch), switchMap(() => {
         return this.http.get<aTutorState[]>(`${localhost}/admin/tutorLt`).pipe(map((result: aTutorState[]) => {
            return Action.tutorListFetchSuccess({ tutors: result })
         }))
      }))
   })

   tutorBlockStart = createEffect(() => {
      return this.actions$.pipe(ofType(Action.tutorBlock ), switchMap((id) => {
         return this.http.patch<{_id:string}>(`${localhost}/admin/tutorBlock`, { id }).pipe(map((data: {_id:string}) => {
            this.store.dispatch(
               Action.tutorListFetch()
            )
            return Action.tutorBlockSuccess({ id: data._id })
         }))
      }))
   })

   studentBlockStart = createEffect(() => {
      return this.actions$.pipe(ofType(Action.studentBlock),switchMap((id) => {
         return this.http.patch<{_id:string}>(`${localhost}/admin/studentBlock`,{id}).pipe(map((data:{_id:string}) => {
            this.store.dispatch(
               Action.studentListFetch()
            )
            return Action.studentBlockSuccess({id:data._id})
         }))
      }))
   })

   constructor(private aservice: AservicesService, private actions$: Actions, private route: Router, private http: HttpClient, private store: Store<appstateinterface>) { }
}