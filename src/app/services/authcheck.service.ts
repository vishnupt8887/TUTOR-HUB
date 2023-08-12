import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
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

  localhost = environment.bckend

  tutorcheck(){
    return this.http.get(`${this.localhost}/tutor/tutorCheck`)
  }

  studentcheck(){
    return this.http.get(`${this.localhost}/student/studentCheck`)
  }
}
