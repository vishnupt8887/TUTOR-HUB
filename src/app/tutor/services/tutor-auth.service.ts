import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutorAuthService {

  constructor() { }

  getTutorAuthStatus(){
    if(localStorage.getItem('tutorToken')){
      return true
    }
    return false
  }
}
