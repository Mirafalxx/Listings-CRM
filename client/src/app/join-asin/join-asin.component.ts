import { Component, OnInit } from '@angular/core';
import { ListingService } from '../shared/listing.service';
import { HttpClient } from '@angular/common/http';
import { Listings } from '../listings';

@Component({
  selector: 'app-join-asin',
  templateUrl: './join-asin.component.html',
  styleUrls: ['./join-asin.component.css']
})



export class JoinAsinComponent implements OnInit {



  listings: Listings[];

  constructor(private listingServices: ListingService) {
  }
  ngOnInit() {
    this.getListings();
  }
  getListings = () => {
    this.listingServices.getListing().subscribe((data: any) => {
      this.listings = data;
      console.log(data);
    })
  }
}
