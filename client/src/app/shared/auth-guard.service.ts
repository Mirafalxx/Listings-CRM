import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isLoggedIn !== true) {
      // window.alert("Access not allowed!");
      this.router.navigate(['authorization']) //ПРОВЕРИТЬ
    }
    return true;
  }





}
