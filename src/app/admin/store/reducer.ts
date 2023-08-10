import { createReducer, on } from "@ngrx/store";
import { adminState } from "../interface/adminState";
import * as action from './action'
import { state } from "@angular/animations";
import { tutorList } from "./selector";
import { aTutorState } from "../interface/aTutorState";



export const initialState: adminState = {
    isLogged: false,
    isLoading: false,
    error: null,
    admin: null,
    studentList: [],
    tutorList: []
}


export const reducer = createReducer(initialState,
    on(action.login, (state) => ({ ...state, isLoading: true, error: null })),
    on(action.loginsuccess, (state, action) => ({ ...state, isLoading: false, error: null, user: action.data })),
    on(action.loginfailure, (state, action) => ({ ...state, isLoading: true, error: action.error })),

    on(action.studentListFetchSuccess, (state, action) => ({ ...state, isLoading: false, error: null, studentList: action.students })),

    on(action.tutorListFetchSuccess, (state, action) => ({ ...state, isLoading: false, error: null, tutorList: action.tutors })),

    on(action.tutorBlockSuccess, (state, action) => ({ ...state })),

    on(action.studentBlockSuccess,(state,action) => ({...state}))



)