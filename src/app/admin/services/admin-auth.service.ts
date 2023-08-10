import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor() { }

  getAdminAuthStatus(){
    if(localStorage.getItem('adminToken')){
      return true
    }
    return false
  }
}
