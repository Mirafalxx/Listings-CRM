import { Component, OnInit } from '@angular/core';
import { ListingService } from '../shared/listing.service';
// import { Listings } from '../listings';
import { GluedListings } from '../gluedListings'
import { HttpClient } from '@angular/common/http';


interface Problem {
  value: string;
  viewValue: string;
};


@Component({
  selector: 'app-partner-table',
  templateUrl: './partner-table.component.html',
  styleUrls: ['./partner-table.component.css']
})
export class PartnerTableComponent implements OnInit {
  listings: GluedListings[];



  constructor(private listingServices: ListingService, private http: HttpClient) { }

  problem: Problem[] = [
    { value: 'Lose  buybox', viewValue: 'Lose  buybox' },
    { value: 'Сompetitors', viewValue: 'Сompetitors' },
    { value: 'Canceled by partner', viewValue: 'Canceled by partner' }
  ];

  ngOnInit() {
    this.getListings();
  }


  getListings = () => {
    this.listingServices.getGluedListing().subscribe((data: any) => {
      this.listings = data;
      console.log(data);
    })
  }


}
