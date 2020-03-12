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

  constructor(private http: HttpClient, private fb: FormBuilder) {
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
    this.http.post('http://localhost:3000/api/addListing', this.myForm.value).subscribe((response) => {
      this.response = response;
      console.log(this.response)
      console.log('Значения : ' + this.myForm.value);
    })
    // console.log();
  }
  get ProductAsin() {
    return this.myForm.get('ProductASIN');
  }
}