import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Listings } from '../ListingInfo/listings';
// import { GluedListings } from '../gluedListings';
import { throwError, Observable } from 'rxjs';
import { allowedBrand } from '../ListingInfo/allowedBrand';
import { bannedBrand } from '../ListingInfo/bannedBrand'
import { Users } from '../ListingInfo/user';


export interface GluedListings {
  id: string
  OriginalAsin: string
  OriginalName: string
  NewAsin: string
  NewName: string
  Problem?: string
}


export interface Stat {
  id?: string
  name: string
  count: string
  department: string
}



// export interface User {
//   id?: string
//   email: string
//   password: string
//   role: string
// }

interface CreateResponse {
  name: string;
}


@Injectable({
  providedIn: 'root'
})
export class ListingService {
  static url = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) { }


  addListing(listings: Listings) {
    return this.http
      .post('http://localhost:3000/api/listings/new', listings);
  };

  addStat(stat: Stat) {
    return this.http
      .post('http://localhost:3000/api/stat/new', stat);
  };



  addUser(user: Users) {
    return this.http.post('http://localhost:3000/api/auth/reg', user)
  }


  getUser() {
    return this.http.get('http://localhost:3000/api/auth/all').
      pipe(
        map((data: Users[]) => {
          return data;
        }), catchError(error => {
          return error
        })
      )
  }


  getListing() {
    return this.http.get(`${ListingService.url}/listings/all`).
      pipe(
        map((data: Listings[]) => {
          return data;
        }), catchError(error => {
          return error
        })
      )
  }

  addGluedListing(gluedListing: GluedListings) {
    return this.http
      .post('http://localhost:3000/api/joinListing', gluedListing);
  }


  addManagerListing(managerListing: GluedListings) {
    return this.http
      .post(`http://localhost:3000/api/variation-listings`, managerListing)
  }


  getBrand() {
    return this.http.get(`${ListingService.url}/brands/all`).
      pipe(
        map((data: allowedBrand[]) => {
          return data;
        }), catchError(error => {
          return error
        })
      )
  }

  getGluedListing() {
    return this.http.get(`${ListingService.url}/variation-listings/all`).
      pipe(
        map((data: GluedListings[]) => {
          return data;
        }), catchError(error => {
          return error
        })
      )
  }


  getforbiddenBrand() {
    return this.http.get(`${ListingService.url}/bannedBrand/all`).
      pipe
      (map((data: bannedBrand[]) => {
        return data;
      }), catchError(error => {
        return error
      }))
  }


}
