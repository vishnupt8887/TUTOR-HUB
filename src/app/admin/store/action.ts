import { createAction, props } from "@ngrx/store"
import { adminState } from "../interface/adminState"
import { aStudentState } from "../interface/aStudentState"
import { aTutorState } from "../interface/aTutorState"

export const login=createAction('[log] do adminlogin',props<{logindata:any}>())
export const loginsuccess=createAction('[log] do adminlogin success',props<({data:any,token:any})>())
export const loginfailure=createAction('[log] do adminlogin failure',props<{error:String}>())

export const studentListFetch = createAction('[fetchStart]search')
export const studentListFetchSuccess = createAction('[Fetch] Success',props<{students:aStudentState[]}>())

export const tutorListFetch = createAction('[tutorFetchStart] search')
export const tutorListFetchSuccess = createAction('[tutorfetch] Success',props<{tutors:aTutorState[]}>())

export const tutorBlock = createAction('[tutor blocking] block',props<{id:any}>())
export const tutorBlockSuccess = createAction('[tutor blocking success]',props<{id:any}>())

export const studentBlock = createAction('[student blocking] s block',props<{id:any}>())
export const studentBlockSuccess = createAction('[student blocking success]',props<{id:any}>())