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
                console.log(data,'from backend tutor');
                return Action.signupsuccess({data:data.data,token:data.token})
            }))
        }))
    })

    signupSuccess = createEffect(()=>{
        return this.actions$.pipe(ofType(Action.signupsuccess),map((data)=>{
            console.log(data,'signup success')
            localStorage.setItem('tutorToken',JSON.stringify(data.token))
              this.route.navigate(['tutor/totp'])
              return Action.otpstart()
        }))
    })


    login=createEffect(()=>{
        return  this.actions$.pipe(ofType(Action.login),mergeMap((action)=>{
              return this.tutorService.tlogin(action.logindata).pipe(map((data)=>{
                            console.log(data,'from bckend tutor');
                if(data.success){
                    console.log('ssssssssssss');
                    
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
                console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
                 this.tutorService.totp().subscribe(()=>{
                    console.log('otpstarttttt ');
                    
                 })

            //   return    this.http.get(`${localhost}/tutor/otpEmail`).pipe(map((data)=>{
                    
            //         console.log('ootppp email ok');
            //     }))
            }))
          },{dispatch:false})

          otpVerify = createEffect(()=>{
            return this.actions$.pipe(ofType(Action.otpVerify),tap((data)=>{
                console.log('xcvbnmzxzxxzxxzxz');
                
                this.tutorService.totpverify(data.otp).subscribe((data)=>{
                    console.log(data.status,data,'dddddddddddddddddd');
                    
                    this.route.navigate(['tutor/thome'])
                })
                // return this.http.post(`${localhost}/tutor/otpCheck`,{otp:data.otp}).pipe(map((data)=>{
                //     console.log('otp verify');
                    
                //     this.route.navigate(['tutor/thome'])
                // }))
            }))
          },{dispatch:false})

    constructor(private tutorService:TservicesService, private actions$:Actions, private route:Router, private http:HttpClient){}
}