import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

// import { HttpClient } from "@angular/common/http";
import { ListingService } from '../shared/listing.service'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-asin',
  templateUrl: './add-asin.component.html',
  styleUrls: ['./add-asin.component.css']
})
export class AddAsinComponent implements OnInit {

  static url = 'http://localhost:3000/api/';
  myForm: FormGroup;
  response: any;
  constructor(private listingService: ListingService, private fb: FormBuilder, private http: HttpClient) {
  }

  user = {
    ProductASIN: '',
    ProductName: ''
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      ProductASIN: new FormControl('', [Validators.required, Validators.minLength(10)]),
      ProductName: new FormControl('', Validators.required)
    })
  }
  get asin() {
    return this.myForm.get('ProductASIN');
  }
  get product() {
    return this.myForm.get('ProductName')
  }
  addAsin() {
    // let { ProductASIN, ProductName } = this.myForm.value;

    this.http.post('http://localhost:3000/api/addListing', this.user).subscribe((response) => {
      this.response = response;
      console.log(this.response);
      this.myForm.reset();
    }, err => console.error(err));
    this.myForm.reset();
  }
}