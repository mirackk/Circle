import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if ( localStorage.getItem("userRole") == "admin" ) {
      return false;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
  
}
