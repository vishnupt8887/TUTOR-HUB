import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentAuthService } from '../student/services/student-auth.service';
import { TutorAuthService } from '../tutor/services/tutor-auth.service';


@Injectable({
  providedIn: 'root'
})
export class TutorauthGuard implements CanActivate {

  constructor(private tutorAuth:TutorAuthService, private route:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    var isAuthenticated = this.tutorAuth.getTutorAuthStatus()
    if(!isAuthenticated){
      this.route.navigate(['/tlogin'])
    }
    return isAuthenticated;
  }
  
}

