import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { HttpClient } from "@angular/common/http";
import { ListingService, Product } from '../shared/listing.service'





@Component({
  selector: 'app-add-asin',
  templateUrl: './add-asin.component.html',
  styleUrls: ['./add-asin.component.css']
})
export class AddAsinComponent implements OnInit {

  static url = 'http://localhost:3000/api/';
  myForm: FormGroup;
  products: Product[] = [];

  constructor(private listingService: ListingService, private fb: FormBuilder) {
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      ProductASIN: ['', [
        Validators.required,
        Validators.minLength(10),
      ]],
      ProductName: ['', [
        Validators.required,
      ]],
    });
  }
  get asin() {
    return this.myForm.get('ProductASIN');
  }

  addAsin() {

    const { ProductASIN, ProductName } = this.myForm.value;

    const products: Product = {
      ProductASIN, ProductName
    }
    this.listingService.create(products).subscribe(product => {
      this.products.push(product)
      console.log(product);

    }, err => console.error(err));

  }
  get ProductAsin() {
    return this.myForm.get('ProductASIN');
  }
}