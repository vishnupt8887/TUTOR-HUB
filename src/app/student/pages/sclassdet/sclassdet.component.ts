import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../../services/apiservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Store} from '@ngrx/store'
import { appstateinterface } from 'src/app/appstate';
import { environment } from 'src/environments/environment';
declare var Razorpay:any

@Component({
  selector: 'app-sclassdet',
  templateUrl: './sclassdet.component.html',
  styleUrls: ['./sclassdet.component.css']
})
export class SclassdetComponent implements OnInit {
  
  classDet : any

  constructor(private services:ApiservicesService, private rout:ActivatedRoute,private store: Store<appstateinterface>,private router: Router){}
   studentId!:string;
   studentName !:string;
  ngOnInit(): void {
    this.findClsDet(this.classId)
    this.store.select('studentState').subscribe((res)=> {
      this.studentId = res.user?._id!
      this.studentName = res.user?.name!
    })
  }

  classId = this.rout.snapshot.paramMap.get('id')


  findClsDet(id:any){
    this.services.classdet(id).subscribe((data:any)=>{
      this.classDet = data.data
    })
  }

  razorPayOptions = { "key":'',

"amount":'',

"currency": "INR",
 "name": '',

"description": "Skartz Payment",

"order_id": '',

"handler": (res:unknown) => {  ;

}

  }
data = {studentId :this.studentId,classId : '',amount:0}
  buy(id:string,price:number,tutorId:string){
  this.data = {
    studentId: this.studentId,
    classId : id,
    amount : price
  }
  this.services.paymentStart({amount:this.data.amount}).subscribe((res:any)=> {
    

    var options = {
      "key": environment.key, // Enter the Key ID generated from the Dashboard
      "amount": res.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Tutor hub",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response:any){
           console.log(response,'rrrrr');
           
           verifyPayment(response,res)
      },
      "prefill": {
          "name": this.studentName,
          
         
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }

    }
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response:any){
      // alert(response.error.code);
      alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
      // alert("Saad")

});
var Outerthis = this;
  rzp1.open();
   function verifyPayment(paymentResponse:any,order:any){
    console.log(order,'order');
    console.log(paymentResponse,'paymentResponse');
    
    
        Outerthis.services.verifyPayment(paymentResponse,order,Outerthis.data).subscribe((data:{status:string})=> {
          
          if(data.status) {
              Outerthis.router.navigate(['student/sclassin',Outerthis.data.classId,tutorId])
          }else {
            Outerthis.router.navigate(['student/sclassdet',Outerthis.data.classId])
          }
        })
    }



  })
  }
  }

