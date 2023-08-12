import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, mergeMap, of } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiservicesService {
  private httpOptions = {
    headers : new HttpHeaders ({
      'content-type' : 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  localhost = environment.bckend

  ssignup(data:any):Observable<any>{
    return this.http.post(`${this.localhost}/student/signup`,data,this.httpOptions)
  }

  slogin(data:any):Observable<any>{
    return this.http.post(`${this.localhost}/student/login`,data,this.httpOptions) 
  }

  classdata():Observable<any>{
    return this.http.get(`${this.localhost}/student/classData`)
  }

  classdet(id:any):Observable<any>{
    return this.http.post(`${this.localhost}/student/classDet`,{id})
  }

  classIn(id:any):Observable<any>{
    return this.http.get(`${this.localhost}/student/classIn/${id}`)
  }

  getPaginatedData(currentpage:any,pagesize:any):Observable<any>{
    return this.http.get(`${this.localhost}/student/paginatedData/${currentpage}/${pagesize}`)
  }

  reviewSubmit(data:any):Observable<any>{
    return this.http.post(`${this.localhost}/student/reviewSubmit`,data)
  }

  questionFetch(id:any,currentpage:any,pagesize:any):Observable<any>{
    return this.http.get(`${this.localhost}/student/questionFetch/${id}/${currentpage}/${pagesize}`)
  }

  assignmentFetch(id:any,currentpage:any,pagesize:any):Observable<any>{
    return this.http.get(`${this.localhost}/student/assignmentFetch/${id}/${currentpage}/${pagesize}`)
  }

  videoFetch(id:any,currentpage:any,pagesize:any):Observable<any>{
    return this.http.get(`${this.localhost}/student/videoFetch/${id}/${currentpage}/${pagesize}`)
  }

  clsFetch(currentpage:any,pagesize:any):Observable<any>{
    return this.http.get(`${this.localhost}/student/studentClass/${currentpage}/${pagesize}`)
  }

  paymentStart(data:{}){
     return this.http.post(`${this.localhost}/student/paymentStart`,data)
  }
  verifyPayment(payment:any,order:any,data:any){
      return this.http.post<{status:string}>(`${this.localhost}/student/verifyPayment`,{payment,order,data})
  }
}
