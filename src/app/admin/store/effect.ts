import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import * as Action from './action'
import { Router } from "@angular/router";
import { AservicesService } from "../services/aservices.service";
import { HttpClient } from "@angular/common/http";
import { appstateinterface } from "src/app/appstate";
import { Store } from "@ngrx/store";
const localhost = 'http://localhost:3000'

@Injectable()
export class adminEffect {
   login = createEffect(() => {
      return this.actions$.pipe(ofType(Action.login), mergeMap((action) => {
         return this.aservice.alogin(action.logindata).pipe(map((data) => {
            console.log(data, 'from bckend admin');
            if (data.success) {
               return Action.loginsuccess({ data: data.data, token: data.token })
            } else {
               return Action.loginfailure({ error: data.error })
            }

         }))
      }))
   })

   loginSuccess = createEffect(() => {
      return this.actions$.pipe(ofType(Action.loginsuccess), tap((data) => {
         console.log(data.token, 'token');

         localStorage.setItem('adminToken',JSON.stringify(data.token))
         this.route.navigate(['/admin/ahome'])
      }))
   }, { dispatch: false })

   studentListStart = createEffect(() => {
      return this.actions$.pipe(ofType(Action.studentListFetch), switchMap(() => {
         return this.http.get(`${localhost}/admin/studentLt`).pipe(map((result: any) => {
            return Action.studentListFetchSuccess({ students: result })
         }))
      }))
   })

   tutorListStart = createEffect(() => {
      return this.actions$.pipe(ofType(Action.tutorListFetch), switchMap(() => {
         return this.http.get(`${localhost}/admin/tutorLt`).pipe(map((result: any) => {
            return Action.tutorListFetchSuccess({ tutors: result })
         }))
      }))
   })

   tutorBlockStart = createEffect(() => {
      return this.actions$.pipe(ofType(Action.tutorBlock), switchMap((id: any) => {
         return this.http.patch(`${localhost}/admin/tutorBlock`, { id }).pipe(map((data: any) => {
            this.store.dispatch(
               Action.tutorListFetch()
            )
            return Action.tutorBlockSuccess({ id: data._id })
         }))
      }))
   })

   studentBlockStart = createEffect(() => {
      return this.actions$.pipe(ofType(Action.studentBlock),switchMap((id:any) => {
         return this.http.patch(`${localhost}/admin/studentBlock`,{id}).pipe(map((data:any) => {
            this.store.dispatch(
               Action.studentListFetch()
            )
            return Action.studentBlockSuccess({id:data._id})
         }))
      }))
   })

   constructor(private aservice: AservicesService, private actions$: Actions, private route: Router, private http: HttpClient, private store: Store<appstateinterface>) { }
}