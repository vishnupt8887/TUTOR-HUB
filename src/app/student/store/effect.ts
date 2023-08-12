import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import * as Action from './action'
import { ApiservicesService } from "src/app/student/services/apiservices.service";
import { Router } from "@angular/router";

@Injectable()
export class studentEffect{

    signup=createEffect(()=>{
  return  this.actions$.pipe(ofType(Action.signup),mergeMap((action)=>{
        return this.apiservice.ssignup(action.formData).pipe(map((data)=>{
                       ;
                      
              return Action.signupsuccess({data:data.data,token:data.token})
        }))
    }))})

    signupSuccess = createEffect(()=>{
        return this.actions$.pipe(ofType(Action.signupsuccess),tap((data)=>{
            localStorage.setItem('studentToken',JSON.stringify(data.token))
              this.route.navigate(['student/shome'])
        }))
    },{dispatch:false})


    login=createEffect(()=>{
        return  this.actions$.pipe(ofType(Action.login),mergeMap((action)=>{
              return this.apiservice.slogin(action.logindata).pipe(map((data)=>{
                             ;
                            if(data.error !== null){
                                 ;
                                
                                return Action.loginfailure({error:data.error})
                            }
                    return Action.loginsuccess({data:data.data,token:data.token})
              }))
          }))})
      
          loginSuccess = createEffect(()=>{
              return this.actions$.pipe(ofType(Action.loginsuccess),tap((data)=>{
                  localStorage.setItem('studentToken',JSON.stringify(data.token))
                   ;
                  
                    this.route.navigate(['student/shome'])
              }))
          },{dispatch:false})

    constructor(private apiservice:ApiservicesService,private actions$: Actions, private route:Router){}
}