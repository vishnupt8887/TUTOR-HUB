import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AservicesService {
  private httpOptions = {
    headers : new HttpHeaders ({
      'content-type' : 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  localhost = 'http://localhost:3000'

  alogin(data:any):Observable<any>{
    return this.http.post(`${this.localhost}/admin/login`,data,this.httpOptions) 
  }
}
