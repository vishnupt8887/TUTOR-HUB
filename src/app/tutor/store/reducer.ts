import { createReducer, on } from "@ngrx/store";
import { tutorState } from "../interface/tutorstate";
import * as action from '../store/action'
import { state } from "@angular/animations";




export const initialState:tutorState = {
    isLogged : false,
    isLoading : false,
    error : null,
    tutor : null
}

export const reducer = createReducer(initialState,
    on(action.signup,(state)=>({...state,isLoading:true,error:null})),
    on(action.signupsuccess,(state,action)=>({...state,isLoading:false,error:null,tutor:action.data})),
    on(action.signupfailure,(state,action)=>({...state,isLoading:true,error:action.error})),

    on(action.login,(state)=>({...state,isLoading:true,error:null})),
    on(action.loginsuccess,(state,action)=>({...state,isLoading:false,error:null,tutor:action.data})),
    on(action.loginfailure,(state,action)=>({...state,isLoading:true,error:action.error})),

    on(action.tutorcheck,(state,action)=>({...state,isLoading:false,error:null,tutor:action.data.data}))
    )