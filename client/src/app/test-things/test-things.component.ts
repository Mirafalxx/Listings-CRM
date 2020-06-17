import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ControlContainer } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListingService, Stat } from '../shared/listing.service'
import { HttpClient } from '@angular/common/http';
import { Listings } from '../ListingInfo/listings';
import { ToastrComponent } from '../toastr/toastr.component';
import { AuthenticationService, UserDetails } from '../shared/authentication.service'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ThrowStmt } from '@angular/compiler';


interface Partners {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-test-things',
  templateUrl: './test-things.component.html',
  styleUrls: ['./test-things.component.css']
})
export class TestThingsComponent implements OnInit {

  details: UserDetails;



  static url = 'http://localhost:3000/api/';
  addAsinFrom: FormGroup;
  response: any;
  submitted = false;
  partnerCheckBox = false;
  constructor(private listingService: ListingService,
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder, private auth: AuthenticationService) {
  }
  partner: Partners[] = [
    { value: 'Dima', viewValue: 'Димы' },
    { value: 'Sergei', viewValue: 'Сергея' },
    { value: 'Sema', viewValue: 'Макса' }
  ];

  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        this.details = user
        // this.lol(this.details.role === 'admin')
      },
      err => {
        console.error(err)
      }
    )

    this.addAsinFrom = this.formBuilder.group({
      name: ['', Validators.required],
      count: ['', Validators.required],
      department: ['', Validators.required]
    });
  }

  get f() { return this.addAsinFrom.controls }



  addStat() {

    const { name, count, department } = this.addAsinFrom.value;

    const stat: Stat = {
      name,
      count,
      department
    }
    this.listingService.addStat(stat).subscribe((response) => {
      this.response = response;
      console.log(this.response);
      this.openSnackBar();
    }, err => console.error(err));
    window.location.reload();
  }









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
    window.location.reload();

  }
  getBannedBrands() {
    this.listingService.getforbiddenBrand().subscribe((data: any) => {
      this.response = data;
      console.log(this.response);
    })
  }


  openSnackBar() {
    this._snackBar.openFromComponent(ToastrComponent, {
      duration: 2000,
    });
  }





}




