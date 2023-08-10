import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminAuthService } from '../admin/services/admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuard implements CanActivate {

  constructor(private adminAuth:AdminAuthService, private route:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    var isAuthenticated = this.adminAuth.getAdminAuthStatus()
    if(!isAuthenticated){
      this.route.navigate(['/alogin'])
    }
    return isAuthenticated;
  }
  
}
