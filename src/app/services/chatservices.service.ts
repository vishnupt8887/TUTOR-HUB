import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {io,Socket} from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class ChatservicesService {
  public socket!:Socket 
  apiUrl = 'http://localhost:3000'
  connect() {
    console.log('Connecting chat socket');
    this.socket = io('http://localhost:3000', {
      reconnection: true,         // enable reconnection
      reconnectionAttempts: 5,   // try to reconnect 5 times
      reconnectionDelay: 1000,   // wait 1 second before each attempt
    });
  
    // listen for reconnection attempts
    this.socket.on('reconnect_attempt', () => {
      console.log('Attempting to reconnect to server...');
    });
  
    // listen for reconnection success
    this.socket.on('reconnect', (attemptNumber: number) => {
      console.log(`Reconnected to server after ${attemptNumber} attempts.`);
    });
  
    // listen for reconnection errors
    this.socket.on('reconnect_error', (error: any) => {
      console.error('Failed to reconnect to server:', error);
    });
  }

  getChats(room:String){
     return this.http.get(`${this.apiUrl}/chat/getChats/${room}`)
  }

  getChatRooms(){
    return this.http.get(`${this.apiUrl}/chat/getChatRooms`)
  }

  joinRoom(data:any) {
    console.log(data);
    this.socket.emit('join', data);
  }

  sendMessage(data:any) {
   
    this.socket.emit('message', data);
  }

  newMessageReceived() {
    const observable = new Observable<{ user: String,userName:String,message: {msg:any,date:Date}}>(observer => {
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
