import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../shared/authentication.service'
import { Router } from '@angular/router'



@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  credentials: TokenPayload = {
    id: 0,
    email: '',
    password: ''
  }
  error = '';


  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }



  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigate(['/join-asin'])
        console.log('test');

      },
      err => {
        this.error = err
        console.error(err)
      }
    )
  }
}
