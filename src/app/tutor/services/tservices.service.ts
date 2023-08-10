import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TservicesService {

  private httpOptions = {
    headers : new HttpHeaders({
      'content-type' : 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  localhost = 'http://localhost:3000'

  tsignup(data:any):Observable<any>{
    return this.http.post(`${this.localhost}/tutor/signup`,data,this.httpOptions)
  }

  tlogin(data:any):Observable<any>{
    return this.http.post(`${this.localhost}/tutor/login`,data,this.httpOptions)
  }

  totp():Observable<any>{
    return this.http.get(`${this.localhost}/tutor/otpEmail`)
  }

  totpverify(otp:any):Observable<any>{
    return this.http.post(`${this.localhost}/tutor/otpCheck`,{otp})
  }

  tutorData():Observable<any>{
    return this.http.get(`${this.localhost}/tutor/tutors`)
  }

  classCreate(data:any):Observable<any>{
    return this.http.post(`${this.localhost}/tutor/classpost`,data,this.httpOptions)
  }

  classdata():Observable<any>{
    return this.http.get(`${this.localhost}/tutor/classData`)
  }

  classDet(id:any):Observable<any>{
    return this.http.get(`${this.localhost}/tutor/classDetail/${id}`)
  }

  classEdit(data:any):Observable<any>{
    return this.http.post(`${this.localhost}/tutor/editClass`,data)
  }

  classdataedit(id:any):Observable<any>{
    return this.http.get(`${this.localhost}/tutor/classDataEdit/${id}`)
  }

  deleteClass(id:any):Observable<any>{
    return this.http.get(`${this.localhost}/tutor/classDelete/${id}`)
  }

  assignmentAdd(data:any,clsId:any):Observable<any>{
    return this.http.post(`${this.localhost}/tutor/assignmentAdd/${clsId}`,data)
  }

  assignmentFetch(id:any,currentpage:any,pagesize:any):Observable<any>{
    return this.http.get(`${this.localhost}/tutor/assignmentFetch/${id}/${currentpage}/${pagesize}`)
  }

  getPaginatedData(currentpage:any,pagesize:any):Observable<any>{
    return this.http.get(`${this.localhost}/tutor/paginatedData/${currentpage}/${pagesize}`)
  }

  questionAdd(data:any,clsId:any):Observable<any>{
    return this.http.post(`${this.localhost}/tutor/questionAdd/${clsId}`,data)
  }

  questionFetch(id:any,currentpage:any,pagesize:any):Observable<any>{
    return this.http.get(`${this.localhost}/tutor/questionFetch/${id}/${currentpage}/${pagesize}`)
  }

  videoAdd(data:any,clsId:any):Observable<any>{
    return this.http.post(`${this.localhost}/tutor/videoUpload/${clsId}`,data)
  }

  videoFetch(id:any,currentpage:any,pagesize:any):Observable<any>{
    return this.http.get(`${this.localhost}/tutor/videoFetch/${id}/${currentpage}/${pagesize}`)
  }

  questionDelete(id:any,clsId:any):Observable<any>{
    return this.http.get(`${this.localhost}/tutor/questionDelete/${id}/${clsId}`)
  }

  videoDelete(id:any,clsId:any):Observable<any>{
    return this.http.get(`${this.localhost}/tutor/videoDelete/${id}/${clsId}`)
  }

  assignmentDelete(id:any,clsId:any):Observable<any>{
    return this.http.get(`${this.localhost}/tutor/assignmentDelete/${id}/${clsId}`)
  }
  
 
  

  // modalDiscription(data:any):Observable<any>{
  //   return this.http.post(`${this.localhost}/tutor/modalDiscription`,data)
  // }

}
