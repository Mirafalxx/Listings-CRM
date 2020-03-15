import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


export interface Product {
  ProductASIN: string
  ProductName: string
}

interface CreateResponse {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  static url = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  create(product: Product) {
    return this.http
      .post<CreateResponse>(`${ListingService.url}/addListing`, product)
      .pipe(map(res => {
        return { ...product, id: res.name }
      }));
  }


}
