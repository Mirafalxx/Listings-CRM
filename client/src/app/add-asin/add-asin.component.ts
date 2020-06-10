import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ControlContainer } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListingService } from '../shared/listing.service'
import { HttpClient } from '@angular/common/http';
import { Listings } from '../ListingInfo/listings';
import { ToastrComponent } from '../toastr/toastr.component';



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
  addAsinFrom: FormGroup;
  response: any;
  submitted = false;
  partnerCheckBox = false;
  constructor(private listingService: ListingService,
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder) {
  }
  partner: Partners[] = [
    { value: 'Dima', viewValue: 'Дима' },
    { value: 'Sergei', viewValue: 'Сергей' },
    { value: 'Sema', viewValue: 'Сёма' }
  ];

  ngOnInit() {
    this.addAsinFrom = this.formBuilder.group({
      ProductASIN: ['', [Validators.required, Validators.minLength(6)]],
      ProductName: ['', Validators.required],
      Brand: ['', Validators.required],
      Partner: ['']
    });
  }

  get f() { return this.addAsinFrom.controls }




  addAsin() {
    const { ProductASIN, ProductName, Brand, Partner } = this.addAsinFrom.value;

    const listing: Listings = {
      ProductASIN,
      ProductName,
      Partner,
      Brand
    }

    this.submitted = true;
    if (this.addAsinFrom.invalid) return;


    this.listingService.addListing(listing).subscribe((response) => {
      this.response = response;
      console.log(this.response);
      this.openSnackBar();

    }, err => console.error(err));
    // window.location.reload();

  }
  getBannedBrands() {
    this.listingService.getBannedBrand().subscribe((data: any) => {
      this.response = data;
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