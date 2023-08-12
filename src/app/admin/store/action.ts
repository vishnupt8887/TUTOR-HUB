import { createAction, props } from "@ngrx/store"
import { adminState } from "../interface/adminState"
import { aStudentState } from "../interface/aStudentState"
import { aTutorState } from "../interface/aTutorState"

export const login=createAction('[log] do adminlogin',props<{logindata:{email :string,password :string }}>())
export const loginsuccess=createAction('[log] do adminlogin success',props<({data:null,token:string})>())
export const loginfailure=createAction('[log] do adminlogin failure',props<{error:string}>())

export const studentListFetch = createAction('[fetchStart]search')
export const studentListFetchSuccess = createAction('[Fetch] Success',props<{students:aStudentState[]}>())

export const tutorListFetch = createAction('[tutorFetchStart] search')
export const tutorListFetchSuccess = createAction('[tutorfetch] Success',props<{tutors:aTutorState[]}>())

export const tutorBlock = createAction('[tutor blocking] block',props<{id:string}>())
export const tutorBlockSuccess = createAction('[tutor blocking success]',props<{id:string}>())

export const studentBlock = createAction('[student blocking] s block',props<{id:string}>())
export const studentBlockSuccess = createAction('[student blocking success]',props<{id:string}>())