import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../shared/authentication.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  details: UserDetails;

  constructor(private auth: AuthenticationService) { }



  ngOnInit() {
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
