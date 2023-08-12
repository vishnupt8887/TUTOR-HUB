import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  localhost = environment.bckend

  alogin(data:{email :string, password :string}):Observable<{data: null, success: boolean, token: string, error: null | string}>{
    return this.http.post<{data: null, success: boolean, token: string, error: null | string}>(`${this.localhost}/admin/login`,data,this.httpOptions) 
  }
}
