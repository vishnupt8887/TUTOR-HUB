import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import * as Action from "../store/action"
import { TservicesService } from "../services/tservices.service";
import { map, mergeMap, tap } from "rxjs";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

const localhost = 'http://localhost:3000'



@Injectable()

export class tutorEffect{
    signup = createEffect(()=>{
        return this.actions$.pipe(ofType(Action.signup),mergeMap((action)=>{
            return this.tutorService.tsignup(action.formData).pipe(map((data)=>{
                 ;
                return Action.signupsuccess({data:data.data,token:data.token})
            }))
        }))
    })

    signupSuccess = createEffect(()=>{
        return this.actions$.pipe(ofType(Action.signupsuccess),map((data)=>{
             
            localStorage.setItem('tutorToken',JSON.stringify(data.token))
              this.route.navigate(['tutor/totp'])
              return Action.otpstart()
        }))
    })


    login=createEffect(()=>{
        return  this.actions$.pipe(ofType(Action.login),mergeMap((action)=>{
              return this.tutorService.tlogin(action.logindata).pipe(map((data)=>{
                             ;
                if(data.success){
                     ;
                    
                     return Action.loginsuccess({data:data.data,token:data.token})
                }else{
                    return Action.loginfailure({ error: data.error })
                }          
              }))
          }))})
      
          loginSuccess = createEffect(()=>{
              return this.actions$.pipe(ofType(Action.loginsuccess),tap((data)=>{
                  localStorage.setItem('tutorToken',JSON.stringify(data.token))
                    this.route.navigate(['tutor/thome'])
              }))
          },{dispatch:false})

          otpStart = createEffect(()=>{
            return this.actions$.pipe(ofType(Action.otpstart),tap((data)=>{
                 ;
                 this.tutorService.totp().subscribe(()=>{
                     ;
                    
                 })

            //   return    this.http.get(`${localhost}/tutor/otpEmail`).pipe(map((data)=>{
                    
            //          ;
            //     }))
            }))
          },{dispatch:false})

          otpVerify = createEffect(()=>{
            return this.actions$.pipe(ofType(Action.otpVerify),tap((data)=>{
                 ;
                
                this.tutorService.totpverify(data.otp).subscribe((data)=>{
                     ;
                    
                    this.route.navigate(['tutor/thome'])
                })
                // return this.http.post(`${localhost}/tutor/otpCheck`,{otp:data.otp}).pipe(map((data)=>{
                //      ;
                    
                //     this.route.navigate(['tutor/thome'])
                // }))
            }))
          },{dispatch:false})

    constructor(private tutorService:TservicesService, private actions$:Actions, private route:Router, private http:HttpClient){}
}