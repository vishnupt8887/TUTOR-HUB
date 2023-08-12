import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { appstateinterface } from 'src/app/appstate';
import { ChatservicesService } from 'src/app/services/chatservices.service';

@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.component.html',
  styleUrls: ['./tchat.component.css']
})
export class TchatComponent implements OnInit {

  chatLists : Array<{_id:String,name:String,email:String}> = []
  messageArray: Array<{tutor?: String ,student? : String,userName:String, message: {msg:any,date:Date}}> = [];

  currentTutor !: String 
  tutorName : String | undefined
  chatStudent !: {_id:String,name:String,email:String}
  roomId !: String 
  public message!: String;

  constructor(private chatService:ChatservicesService,private store:Store<appstateinterface>,private activatedRoute:ActivatedRoute){
    chatService.connect()
    this.chatService.newMessageReceived().subscribe(data => {
      
      this.messageArray.push(data)
    })
  }
  
  classId = this.activatedRoute.snapshot.paramMap.get('clsId') ?? '';

  ngOnInit(): void {
   this.chatService.getChatRooms(this.classId).subscribe((data:any)=>{
    console.log(data,',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,');
    
    this.chatLists = data.data
   })

   this.store.select('tutorState').subscribe((data)=>{
    this.currentTutor = data.tutor?._id ? data.tutor?._id : ''
   })

 


  }
  joinChat(student:any){
    
    this.chatStudent = student
    this.roomId = this.currentTutor + student._id;
    this.chatService.joinRoom({user:this.currentTutor,tutor:true,room:this.roomId})

    if(this.roomId){
      this.chatService.getChats(this.roomId).subscribe((data:any)=>{
        
            this.messageArray = data.data
      })
     }
  }

  sendMessage() {
   
    
      this.chatService.sendMessage({room: this.roomId, user: this.currentTutor,tutor:true,userName: this.tutorName, message: this.message});
      this.message = '';
    }
}
