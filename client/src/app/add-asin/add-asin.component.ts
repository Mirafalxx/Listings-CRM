import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ControlContainer } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

// import { HttpClient } from "@angular/common/http";
import { ListingService } from '../shared/listing.service'
import { HttpClient } from '@angular/common/http';
import { Listings } from '../ListingInfo/listings';
import { ToastrComponent } from '../toastr/toastr.component';
import { forbiddenBrandValidator } from '../validation/teeee';


interface Partners {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-asin',
  templateUrl: './add-asin.component.html',
  styleUrls: ['./add-asin.component.css']
})
export class AddAsinComponent implements OnInit {

  static url = 'http://localhost:3000/api/';
  myForm: FormGroup;
  response: any;
  partnerCheckBox = false;
  constructor(private listingService: ListingService,
    private http: HttpClient, private _snackBar: MatSnackBar) {
  }
  partner: Partners[] = [
    { value: 'Dima', viewValue: 'Дима' },
    { value: 'Sergei', viewValue: 'Сергей' },
    { value: 'Sema', viewValue: 'Сёма' }
  ];

  ngOnInit() {
    this.myForm = new FormGroup({
      ProductASIN: new FormControl('', [Validators.required, Validators.minLength(10)]),
      ProductName: new FormControl('', Validators.required),
      Partner: new FormControl('', Validators.required),
      Brand: new FormControl('', [Validators.required, forbiddenBrandValidator(/bob/i)]),
    });
  }

  get asin() {
    return this.myForm.get('ProductASIN');
  }
  get product() {
    return this.myForm.get('ProductName')
  }

  get partnresName() {
    return this.myForm.get('Partner');
  }

  get brand() {
    return this.myForm.get('Brand')
  }

  addAsin() {
    const { ProductASIN, ProductName, Brand, Partner } = this.myForm.value;

    const listing: Listings = {
      ProductASIN,
      ProductName,
      Partner,
      Brand
    }
    this.listingService.addListing(listing).subscribe((response) => {
      this.response = response;
      console.log(this.response);
      this.openSnackBar();
      this.myForm.reset();
      window.location.reload();
    }, err => console.error(err));

    this.myForm.reset();
    // this.addBrand();
  }
  getBannedBrands() {
    this.listingService.getBannedBrand().subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
  }

  // addBrand() {
  //   const Brand = this.myForm.value;
  //   this.http.post('http://localhost:3000/api/addBrand', Brand).subscribe((response) => {
  //     console.log(response);
  //     this.openSnackBar();
  //     window.location.reload();
  //   })
  // }

  openSnackBar() {
    this._snackBar.openFromComponent(ToastrComponent, {
      duration: 2000,
    });
  }



}