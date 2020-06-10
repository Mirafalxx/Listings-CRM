import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'
import { ThrowStmt } from '@angular/compiler';



export interface UserDetails {
  id: number
  email: string
  password: string
  exp: number
  iat: number
}

interface TokenResponse {
  token: string
}

export interface TokenPayload {
  id: number
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: string
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isALoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(private http: HttpClient, private router: Router) { }




  private saveToken(token: string): void {
    localStorage.setItem('userToken', token)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('userToken')
    }
    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    }
    else {
      return null;
    }
  }
  // public isLoggedIn() {
  //   const user = this.getUserDetails();
  //   if (user) {
  //     return user.exp > Date.now() / 1000;
  //   }
  //   else {
  //     return false
  //   }
  // }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('userToken');
    return (authToken !== null) ? true : false
  }

  public register(user: TokenPayload): Observable<any> {

    const base = this.http.post(`/api/registration`, user);

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data;
      })
    )
    return request;
  }



  public login(user: TokenPayload): Observable<any> {

    const base = this.http.post(`http://localhost:3000/api/auth/login`, user);
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data;
      })
    )
    this.loggedIn.next(true);
    return request;
  }

  public profile(): Observable<any> {
    return this.http.get('http://localhost:3000/api/profile', {
      headers: { Authorization: `${this.getToken()}` }
    })
  }

  public logOut() {
    this.loggedIn.next(false);
    this.token = '';
    window.localStorage.removeItem('userToken')
    this.router.navigate(['/authorization'])
  }
}
