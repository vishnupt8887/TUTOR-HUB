import { aStudentState } from "./aStudentState";
import { aTutorState } from "./aTutorState";

export interface adminState{
    isLogged:Boolean;
    isLoading:Boolean,
    error:any; 
    admin:{
        email:string,
        password:string
    }|null;
    studentList:aStudentState[] | [],
    tutorList:aTutorState[] | []
}