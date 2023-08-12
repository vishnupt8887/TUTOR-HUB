import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  tokenHelper(request:HttpRequest<unknown>){
    if(request.url.includes('/admin')){
      if(localStorage.getItem('adminToken')){
        request = request.clone({
          setHeaders:{
            Authorization : `Bearer ${JSON.parse(localStorage.getItem('adminToken')??'')}`
          }
        })
      }
    }else if(request.url.includes('/tutor') || request.url.includes('/getChatRooms')){
      if(localStorage.getItem('tutorToken')){
        request = request.clone({
          setHeaders:{
            Authorization : `Bearer ${JSON.parse(localStorage.getItem('tutorToken')??'')}`
          }
        })
      }
    }else{
      if(localStorage.getItem('studentToken')){
        request = request.clone({
          setHeaders:{
            Authorization : `Bearer ${JSON.parse(localStorage.getItem('studentToken')??'')}`
          }
        })
      }
    }
    return request;
  }

}
