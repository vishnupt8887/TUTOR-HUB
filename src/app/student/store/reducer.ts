import {  createReducer, on } from "@ngrx/store";
import { studentState } from "../interface/studentstate";
import * as action from './action'

export const initialState:studentState={
    isLogged: false,
    isLoading: false,
    error: null,
    user:null
}

export const reducer = createReducer(initialState,
     on(action.signup,(state)=>({...state,isLoading:true,error:null})),
    on(action.signupsuccess,(state,action)=>({...state,isLoading:false,error:null,user:action.data})),
    on(action.signupfailure,(state,action)=>({...state,isLoading:true,error:action.error})),

    on(action.login,(state)=>({...state,isLoading:true,error:null})),
    on(action.loginsuccess,(state,action)=>({...state,isLoading:false,error:null,user:action.data})),
    on(action.loginfailure,(state,action)=>({...state,isLoading:true,error:action.error})),
    
    on(action.studentcheck,(state,action)=>({...state,isLoading:false,error:null,user:action.data.data}))
    
    )