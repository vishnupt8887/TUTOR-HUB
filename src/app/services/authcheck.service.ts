import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthcheckService {
  private httpOptions = {
    headers : new HttpHeaders({
      'content-type' : 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  localhost = 'http://localhost:3000'

  tutorcheck(){
    return this.http.get(`${this.localhost}/tutor/tutorCheck`)
  }

  studentcheck(){
    return this.http.get(`${this.localhost}/student/studentCheck`)
  }
}
