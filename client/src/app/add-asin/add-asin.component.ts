import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http"


@Component({
  selector: 'app-add-asin',
  templateUrl: './add-asin.component.html',
  styleUrls: ['./add-asin.component.css']
})
export class AddAsinComponent implements OnInit {
  myForm: FormGroup;
  response: any;
  // listingData = {
  //   Product_ASIN: '',
  //   Product_name: ''
  // }

  constructor(private http: HttpClient, private fb: FormBuilder) {
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      asin: ['', [
        Validators.required,
        Validators.minLength(10),
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],

    });
  }

  get asin() {
    return this.myForm.get('asin');
  }
  // addAsin() {
  //   this.http.post('http://localhost:3000/api/addListing', this.listingData).subscribe((response) => {
  //     this.response = response;
  //     console.log(this.response)
  //   })
  // }


  get ProductAsin() {
    return this.myForm.get('asin');
  }
}