import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {io,Socket} from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class ChatservicesService {
  public socket!:Socket 
  apiUrl = isDevMode()?'http://localhost:3000':'https://tutors-hub-api.timezonewatch.store'
  connect() {
     ;
    this.socket = io(this.apiUrl, {
      reconnection: true,         // enable reconnection
      reconnectionAttempts: 5,   // try to reconnect 5 times
      reconnectionDelay: 1000,   // wait 1 second before each attempt
    });
  
    // listen for reconnection attempts
    this.socket.on('reconnect_attempt', () => {
       ;
    });
  
    // listen for reconnection success
    this.socket.on('reconnect', (attemptNumber: number) => {
       ;
    });
  
    // listen for reconnection errors
    this.socket.on('reconnect_error', (error:Error) => {
      console.error('Failed to reconnect to server:', error);
    });
  }

  getChats(room:String){
     return this.http.get(`${this.apiUrl}/chat/getChats/${room}`)
  }

  getChatRooms(clsId:string){
    return this.http.get(`${this.apiUrl}/chat/getChatRooms/${clsId}`)
  }

  joinRoom(data:{user?:String,student?:boolean,tutor?:boolean,room:String}) {
     ;
    this.socket.emit('join', data);
  }

  sendMessage(data:any) {
   
    this.socket.emit('message', data);
  }

  newMessageReceived() {
    const observable = new Observable<{ user: String,userName:String,message: {msg:string,date:Date}}>(observer => {
      this.socket.on('new message', (data) => {
        
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  
  constructor(private http:HttpClient) { }
}
