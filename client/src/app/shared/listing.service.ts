import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Listings } from '../ListingInfo/listings';
// import { GluedListings } from '../gluedListings';
import { throwError, Observable } from 'rxjs';
import { allowedBrand } from '../ListingInfo/allowedBrand';
import { bannedBrand } from '../ListingInfo/bannedBrand'


export interface GluedListings {
  id: string
  OriginalAsin: string
  OriginalName: string
  NewAsin: string
  NewName: string
  Problem?: string
}

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
      .post('http://localhost:3000/api/addListing', listings);
  }

  addGluedListing(gluedListing: GluedListings) {
    return this.http
      .post('http://localhost:3000/api/joinListing', gluedListing);
  }



  addManagerListing(managerListing: GluedListings) {
    return this.http
      .post(`http://localhost:3000/api/managerListing`, managerListing)
  }


  getListing() {
    return this.http.get(`${ListingService.url}/getListings`).
      pipe(
        map((data: Listings[]) => {
          return data;
        }), catchError(error => {
          return error
        })
      )
  }

  getBrand() {
    return this.http.get(`${ListingService.url}/allowedBrand`).
      pipe(
        map((data: allowedBrand[]) => {
          return data;
        }), catchError(error => {
          return error
        })
      )
  }

  getBannedBrand() {
    return this.http.get(`${ListingService.url}/getBannedBrand`).
      pipe(
        map((data: bannedBrand[]) => {
          return data;
        }), catchError(error => {
          return error
        })
      )
  }



  getGluedListing() {
    return this.http.get(`${ListingService.url}/gluedListing`).
      pipe(
        map((data: GluedListings[]) => {
          return data;
        }), catchError(error => {
          return error
        })
      )
  }



}
