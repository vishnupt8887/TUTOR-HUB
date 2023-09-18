import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './tutor/pages/login/login.component';
import { SignupComponent } from './tutor/pages/signup/signup.component';
import { SsignupComponent } from './student/pages/ssignup/ssignup.component';
import { SloginComponent } from './student/pages/slogin/slogin.component';
import { ShomeComponent } from './student/pages/shome/shome.component';
import { HomeComponent } from './tutor/pages/home/home.component';
import { NavbarComponent } from './tutor/pages/navbar/navbar.component';
import { AhomeComponent } from './admin/pages/ahome/ahome.component';
import { AloginComponent } from './admin/pages/alogin/alogin.component';
import { AstudentlComponent } from './admin/pages/astudentl/astudentl.component';
import { AtutorlComponent } from './admin/pages/atutorl/atutorl.component';
import { TutorauthGuard } from './auth-guard/tutor-auth.guard';
import { StudentauthGuard } from './auth-guard/student-auth.guard';
import { AdminauthGuard } from './auth-guard/admin-auth.guard';
import { OtpComponent } from './tutor/pages/otp/otp.component';
import { ClassComponent } from './tutor/pages/class/class.component';
import { ClasshomeComponent } from './tutor/pages/classhome/classhome.component';
import { SclassdetComponent } from './student/pages/sclassdet/sclassdet.component';
import { ClassdetComponent } from './tutor/pages/classdet/classdet.component';
import { SclasshomeComponent } from './student/pages/sclasshome/sclasshome.component';
import { EditclassComponent } from './tutor/pages/editclass/editclass.component';
import { TchatComponent } from './tutor/pages/tchat/tchat.component';
import { SchatComponent } from './student/pages/schat/schat.component';
import { SclassinComponent } from './student/pages/sclassin/sclassin.component';
import { TquestionpaperComponent } from './tutor/pages/tquestionpaper/tquestionpaper.component';
import { TassignmentsComponent } from './tutor/pages/tassignments/tassignments.component';
import { SassignmentsComponent } from './student/pages/sassignments/sassignments.component';
import { SquestionpaperComponent } from './student/pages/squestionpaper/squestionpaper.component';
import { SratingComponent } from './student/pages/srating/srating.component';
import { TassignpdfComponent } from './tutor/pages/tassignpdf/tassignpdf.component';
import { TvideoComponent } from './tutor/pages/tvideo/tvideo.component';
import { TclassstudentlistComponent } from './tutor/pages/tclassstudentlist/tclassstudentlist.component';
import { StudentclassComponent } from './student/pages/studentclass/studentclass.component';


const routes: Routes = [
  {path:'',redirectTo:'/tlogin',pathMatch:'full'},
  {path:'tlogin',component:LoginComponent},
  {path:'tsignup',component:SignupComponent},
  {path:'tutor/totp',component:OtpComponent},
  {path:'tutor/tclass/:id',component:ClassComponent},
  {path:'tutor/tclasshome',component:ClasshomeComponent},
  {path:'tutor/tclassdet/:id',component:ClassdetComponent},
  {path:'tutor/teditclass/:id',component:EditclassComponent},
  {path:'tutor/tchat/:clsId',component:TchatComponent},
  {path:'tutor/tquestion/:clsId',component:TquestionpaperComponent},
  {path:'tutor/tassignment/:clsId',component:TassignmentsComponent},
  {path:'tutor/tassignpdf/:clsId/:apath',component:TassignpdfComponent},
  {path:'tutor/tvideo/:clsId',component:TvideoComponent},
  {path:'tutor/tclassstudentlist/:clsId',component:TclassstudentlistComponent},
  {path:'tutor/thome',component:HomeComponent, canActivate:[TutorauthGuard]},

  {path:'ssignup',component:SsignupComponent},
  {path:'slogin',component:SloginComponent},
  {path:'student/sclassdet/:id',component:SclassdetComponent},
  {path:'student/sclasshome',component:SclasshomeComponent},
  {path:'student/schat/:tId/:clsId',component:SchatComponent},
  {path:'student/sclassin/:id/:tuId',component:SclassinComponent},
  {path:'student/sassignment/:clsId/:tuId',component:SassignmentsComponent},
  {path:'student/squestion/:clsId/:tuId',component:SquestionpaperComponent},
  {path:'student/srating/:clsId/:tuId',component:SratingComponent},
  {path:'student/studentclass',component:StudentclassComponent},
  {path:'student/shome',component:ShomeComponent, canActivate:[StudentauthGuard]},

  {path:'alogin',component:AloginComponent},
  {path:'admin/ahome',component:AhomeComponent, canActivate:[AdminauthGuard]},
  {path:'admin/astudent',component:AstudentlComponent, canActivate:[AdminauthGuard]},
  {path:'admin/atutor',component:AtutorlComponent, canActivate:[AdminauthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
