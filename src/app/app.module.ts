import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './tutor/pages/login/login.component';
import { SignupComponent } from './tutor/pages/signup/signup.component';
import { HomeComponent } from './tutor/pages/home/home.component';
import { SloginComponent } from './student/pages/slogin/slogin.component';
import { SsignupComponent } from './student/pages/ssignup/ssignup.component';
import { ShomeComponent } from './student/pages/shome/shome.component';
import { reducer  as studentReducer } from '../app/student/store/reducer'
import { reducer as tutorReducer } from '../app/tutor/store/reducer'
import { reducer as adminReducer } from '../app/admin/store/reducer' 
import { studentEffect } from './student/store/effect';
import { NavbarComponent } from './tutor/pages/navbar/navbar.component';
import { SnavbarComponent } from './student/pages/navbar/navbar.component'
import { SlidebarComponent } from './admin/pages/slidebar/slidebar.component';
import { AhomeComponent } from './admin/pages/ahome/ahome.component';
import { tutorEffect } from './tutor/store/effect';
import { AloginComponent } from './admin/pages/alogin/alogin.component';
import { adminEffect } from './admin/store/effect';
import { AstudentlComponent } from './admin/pages/astudentl/astudentl.component';
import { AtutorlComponent } from './admin/pages/atutorl/atutorl.component';
import { TutorPipe } from './admin/pipe/tutor.pipe';
import { TestInterceptorInterceptor } from './test-interceptor.interceptor';
import { StudentPipePipe } from './admin/pipe/student-pipe.pipe';
import { ClassComponent } from './tutor/pages/class/class.component';
import { OtpComponent } from './tutor/pages/otp/otp.component';
import { ClasshomeComponent } from './tutor/pages/classhome/classhome.component';
import { ClasslandComponent } from './tutor/pages/classland/classland.component';
import { SclassComponent } from './student/pages/sclass/sclass.component';
import { SclassdetComponent } from './student/pages/sclassdet/sclassdet.component';
import { ClassdetComponent } from './tutor/pages/classdet/classdet.component';
import { SclasshomeComponent } from './student/pages/sclasshome/sclasshome.component';
import { EditclassComponent } from './tutor/pages/editclass/editclass.component';
import { ClasspipePipe } from './tutor/pipe/classpipe.pipe';
import { SclasspipePipe } from './student/pipe/sclasspipe.pipe';
import { TsidebarComponent } from './tutor/pages/tsidebar/tsidebar.component';
import { TchatComponent } from './tutor/pages/tchat/tchat.component';
import { SchatComponent } from './student/pages/schat/schat.component';
import { SclassinComponent } from './student/pages/sclassin/sclassin.component';
import { SratingComponent } from './student/pages/srating/srating.component';
import { SpaginationComponent } from './student/pages/spagination/spagination.component';
import { TquestionpaperComponent } from './tutor/pages/tquestionpaper/tquestionpaper.component';
import { TassignmentsComponent } from './tutor/pages/tassignments/tassignments.component';
import { SassignmentsComponent } from './student/pages/sassignments/sassignments.component';
import { SquestionpaperComponent } from './student/pages/squestionpaper/squestionpaper.component';
import { ModalComponent } from './tutor/pages/modal/modal.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TpaginationComponent } from './tutor/pages/tpagination/tpagination.component';
import { TassignpdfComponent } from './tutor/pages/tassignpdf/tassignpdf.component';
import { StoastrateComponent } from './student/pages/stoastrate/stoastrate.component';
import { TvideoComponent } from './tutor/pages/tvideo/tvideo.component';
import { TclassstudentlistComponent } from './tutor/pages/tclassstudentlist/tclassstudentlist.component';
import { VideomodalComponent } from './tutor/pages/videomodal/videomodal.component';
import { QuestionmodalComponent } from './tutor/pages/questionmodal/questionmodal.component';
import { QuespageComponent } from './tutor/pages/quespage/quespage.component';
import { DemomodalComponent } from './tutor/pages/demomodal/demomodal.component';
import { SquespageComponent } from './student/pages/squespage/squespage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SloginComponent,
    SsignupComponent,
    ShomeComponent,
    NavbarComponent,
    SnavbarComponent,
    SlidebarComponent,
    AhomeComponent,
    AloginComponent,
    AstudentlComponent,
    AtutorlComponent,
    TutorPipe,
    StudentPipePipe,
    ClassComponent,
    OtpComponent,
    ClasshomeComponent,
    ClasslandComponent,
    SclassComponent,
    SclassdetComponent,
    ClassdetComponent,
    SclasshomeComponent,
    EditclassComponent,
    ClasspipePipe,
    SclasspipePipe,
    TsidebarComponent,
    TchatComponent,
    SchatComponent,
    SclassinComponent,
    SratingComponent,
    SpaginationComponent,
    TquestionpaperComponent,
    TassignmentsComponent,
    SassignmentsComponent,
    SquestionpaperComponent,
    ModalComponent,
    TpaginationComponent,
    TassignpdfComponent,
    StoastrateComponent,
    TvideoComponent,
    TclassstudentlistComponent,
    VideomodalComponent,
    QuestionmodalComponent,
    QuespageComponent,
    DemomodalComponent,
    SquespageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([studentEffect,tutorEffect,adminEffect]),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
     }),
     StoreModule.forFeature('studentState',studentReducer),
     StoreModule.forFeature('tutorState',tutorReducer),
     StoreModule.forFeature('adminState',adminReducer),
     PdfViewerModule
  ],
  providers: [   {
    provide: HTTP_INTERCEPTORS,
    useClass: TestInterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
