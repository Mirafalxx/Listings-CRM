import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

// import { HttpClient } from "@angular/common/http";
import { ListingService } from '../shared/listing.service'
import { HttpClient } from '@angular/common/http';
import { Listings } from '../ListingInfo/listings';
import { ToastrComponent } from '../toastr/toastr.component';



@Component({
  selector: 'app-add-asin',
  templateUrl: './add-asin.component.html',
  styleUrls: ['./add-asin.component.css']
})
export class AddAsinComponent implements OnInit {

  static url = 'http://localhost:3000/api/';
  myForm: FormGroup;
  response: any;
  constructor(private listingService: ListingService,
    private http: HttpClient, private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.myForm = new FormGroup({
      ProductASIN: new FormControl('', [Validators.required, Validators.minLength(10)]),
      ProductName: new FormControl('', Validators.required),
      Brand: new FormControl('', Validators.required)
    })
  }

  get asin() {
    return this.myForm.get('ProductASIN');
  }
  get product() {
    return this.myForm.get('ProductName')
  }

  get brand() {
    return this.myForm.get('Brand')
  }

  addAsin() {
    const { ProductASIN, ProductName, Brand } = this.myForm.value;

    const listing: Listings = {
      ProductASIN,
      ProductName,
      Brand
    }

    this.listingService.addListing(listing).subscribe((response) => {
      this.response = response;
      console.log(this.response);
      this.openSnackBar();
      this.myForm.reset();
    }, err => console.error(err));
    this.myForm.reset();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(ToastrComponent, {
      duration: 2000,
    });
  }
}