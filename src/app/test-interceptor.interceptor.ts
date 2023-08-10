import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
       console.log(request.url,'urlllllllllllllllll'
       );
       
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
    return next.handle(request);
  }
}
