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
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.auth.isALoggedIn         // {1}
      .pipe(
        take(1),                              // {2} 
        map((isLoggedIn: boolean) => {         // {3}
          if (!isLoggedIn) {
            this.router.navigate(['/authorization']);  // {4}
            return false;
          }
          return true;
        })
      )
  }

  // canActivate() {
  //   if (!this.auth.isLoggedIn()) {
  //     this.router.navigate(['/authorization'])
  //     return false
  //   }
  //   return true;
  // };

}
