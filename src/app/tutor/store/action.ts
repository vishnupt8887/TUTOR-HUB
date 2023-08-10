import { createAction, props } from "@ngrx/store";



export const signup = createAction('[log] do tutorsignup',props<{formData:any}>())
export const signupsuccess = createAction('[log] do tutorsignup success',props<({data:any,token:any})>())
export const signupfailure = createAction('[log] do tutorsignup failure',props<{error:string}>())

export const login=createAction('[log] do tutorlogin',props<{logindata:any}>())
export const loginsuccess=createAction('[log] do tutorlogin success',props<({data:any,token:any})>())
export const loginfailure=createAction('[log] do tutorlogin failure',props<{error:string}>())

export const otpstart = createAction('[log] otp start')
export const otpVerify = createAction('[log] otp verified',props<{otp:any}>())

export const tutorcheck=createAction('[log] do tutor check',props<({data:any,token:any})>())
