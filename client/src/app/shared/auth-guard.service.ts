import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }
  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //   return this.auth.isLoggedIn.pipe(
  //     take(1),
  //     map((isLoggedIn: boolean) => {
  //       if (!isLoggedIn) {
  //         this.router.navigate(['/login']);
  //         return false;
  //       }
  //       return true;
  //     })
  //   );
  // }


  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/authorization'])
      return false
    }
    return true;
  };

}
