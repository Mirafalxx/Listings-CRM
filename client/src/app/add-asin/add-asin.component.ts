import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { HttpClient } from "@angular/common/http";
import { ListingService } from '../shared/listing.service'





@Component({
  selector: 'app-add-asin',
  templateUrl: './add-asin.component.html',
  styleUrls: ['./add-asin.component.css']
})
export class AddAsinComponent implements OnInit {

  static url = 'http://localhost:3000/api/';
  myForm: FormGroup;
  constructor(private listingService: ListingService, private fb: FormBuilder) {
  }
  ngOnInit() {

  }

}