import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Listings } from '../listings';
// import { GluedListings } from '../gluedListings';
import { throwError, Observable } from 'rxjs';


export interface GluedListings {
  id: string
  OriginalAsin: string
  OriginalName: string
  NewAsin: string
  NewName: string
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

  // create(listing: GluedListings): Observable<GluedListings> {
  //   return this.http
  //     .post<CreateResponse>(`${ListingService.url}/gluedListing`, listing)
  //     .pipe(
  //       map(res => {
  //         console.log(`Response: `, res);
  //         return { ...listing, id: res.name };
  //       })
  //     );
  // }

  addGluedListing(gluedListing: GluedListings) {
    return this.http
      .post('http://localhost:3000/api/joinListing', gluedListing);
  }

}
