import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './services/token.service';

@Injectable()
export class TestInterceptorInterceptor implements HttpInterceptor {

  constructor(private service : TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    let req = this.service.tokenHelper(request)
   
    return next.handle(req ? req : request);
  }
}
