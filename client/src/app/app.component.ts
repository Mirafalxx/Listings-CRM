import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from './shared/authentication.service'
import { Observable, from } from 'rxjs';

import { Role } from './ListingInfo/Role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  details: UserDetails;
  role: Role


  isLoggedIn$: Observable<boolean>;


  constructor(public auth: AuthenticationService) {
    // this.auth.
  }



  ngOnInit() {
    this.isLoggedIn$ = this.auth.isALoggedIn;

    this.auth.profile().subscribe(
      user => {
        this.details = user
        // this.lol(this.details.role === 'admin')
      },
      err => {
        console.error(err)
      }
    )
  }



}
