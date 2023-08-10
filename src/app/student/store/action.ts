import { createAction, props } from "@ngrx/store"




export const signup=createAction('[log] do studentsignup',props<{formData:any}>())
export const signupsuccess=createAction('[log] do studentsignup success',props<({data:any,token:any})>())
export const signupfailure=createAction('[log] do studentsignup failure',props<{error:string}>())

export const login=createAction('[log] do studentlogin',props<{logindata:any}>())
export const loginsuccess=createAction('[log] do studentlogin success',props<({data:any,token:any})>())
export const loginfailure=createAction('[log] do studentlogin failure',props<{error:string}>())

export const studentcheck=createAction('[log] do student check',props<({data:any,token:any})>())