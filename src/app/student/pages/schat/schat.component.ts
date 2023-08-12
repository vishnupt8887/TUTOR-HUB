import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { appstateinterface } from 'src/app/appstate';
import { ChatservicesService } from 'src/app/services/chatservices.service';

@Component({
  selector: 'app-schat',
  templateUrl: './schat.component.html',
  styleUrls: ['./schat.component.css']
})
export class SchatComponent implements OnInit {
  messageArray: Array<{tutor?: String ,student? : String,userName:String, message: {msg:any,date:Date}}> = [];
 

  private chatroom!:String;
  public message!: String;

 
  currentUserId : String | undefined 
  currentName : String | undefined
 


   constructor(private chat : ChatservicesService,private router:ActivatedRoute , private store:Store<appstateinterface>){

    chat.connect()
    this.chat.newMessageReceived().subscribe(data => {
      
      this.messageArray.push(data)
    })
   }
   classId = this.router.snapshot.paramMap.get('clsId') ?? ''
  ngOnInit(): void {
    let tuId = this.router.snapshot.paramMap.get('tId') ?? ''

     this.store.select('studentState').subscribe((data)=>{
         
        this.currentUserId = data.user?._id ;
        this.currentName = data.user?.name;
        this.chatroom = tuId + this.currentUserId ;

        let datas = {user:this.currentUserId,student:true,room:this.chatroom}
    
        this.chat.joinRoom(datas)

        this.chat.getChats(this.chatroom).subscribe((data:any)=>{
          
              this.messageArray = data.data
        })

     })

   



  }

  sendMessage() {
   ;
  
    this.chat.sendMessage({room: this.chatroom, user: this.currentUserId,student:true,userName: this.currentName, message: this.message});
    this.message = '';
  }
   
   
}
