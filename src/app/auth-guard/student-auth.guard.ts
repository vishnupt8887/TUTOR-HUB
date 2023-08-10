import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentAuthService } from '../student/services/student-auth.service';



@Injectable({
  providedIn: 'root'
})
export class StudentauthGuard implements CanActivate {

  constructor(private studentAuth:StudentAuthService, private route:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    var isAuthenticated = this.studentAuth.getStudentAuthStatus()
    if(!isAuthenticated){
      this.route.navigate(['/slogin'])
    }
    return isAuthenticated;
  }
  
}
