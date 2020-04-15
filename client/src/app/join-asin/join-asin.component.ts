import { Component, OnInit } from '@angular/core';
import { ListingService } from '../shared/listing.service';
import { HttpClient } from '@angular/common/http';
import { Listings } from '../listings';
import { GluedListings } from '../gluedListings';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { takeLast } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';






interface Problem {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-join-asin',
  templateUrl: './join-asin.component.html',
  styleUrls: ['./join-asin.component.css']
})

export class JoinAsinComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'take'];
  // displayedColumns: string[] = ['Asin', 'Listing', 'Partner', 'Employee','Title'];


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  myForm: FormGroup;
  listings: Listings[];
  response: any;

  // user = {
  //   OriginalAsin: "",
  //   OriginalName: "",
  //   NewAsin: "",
  //   NewName: ""
  // }

  constructor(private listingServices: ListingService, private http: HttpClient) {
  }

  problem: Problem[] = [
    { value: 'UPC brand', viewValue: 'UPC brand' },
    { value: 'Listing deleted', viewValue: 'Listing deleted' },
    { value: 'Canceled by partner', viewValue: 'Canceled by partner' }
  ];
  dataSource = new MatTableDataSource;
  ngOnInit() {
    this.getListings();
  }
  getListings = () => {
    this.listingServices.getListing().subscribe((data: any) => {
      this.listings = data;
      this.dataSource = new MatTableDataSource(data)
      console.log(data);
    })
  }


  createGluedListing(gluedListings: GluedListings) {
    this.listingServices.addGluedListing(gluedListings).subscribe((response) => {
      this.response = response;
      console.log(this.response);
    }, err => console.error(err));



  }



  // createGluedListing(gluedListings: GluedListings) {
  //   this.listingServices.addGluedListing(gluedListings).subscribe(() => {
  //     this.listings = this.listings.filter(t => t.id !== gluedListings.id);

  //   },
  //     err => console.error(err));
  // }



}
