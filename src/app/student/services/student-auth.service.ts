import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentAuthService {

  constructor() { }

  getStudentAuthStatus(){
    if(localStorage.getItem('studentToken')){
      return true
    }
    return false
  }
}
