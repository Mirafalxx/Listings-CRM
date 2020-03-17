import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Listings } from '../listings'
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ListingService {
  static url = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) { }

  getListing() {
    return this.http.get(`${ListingService.url}/getListings`).
      pipe(map((data: Listings[]) => {
        return data;
      }), catchError(error => {
        return throwError('Something bad :', error);
      }))
  }

}
