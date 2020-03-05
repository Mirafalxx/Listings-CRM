import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { NewServiceService } from '../new-service.service';

@Component({
  selector: 'app-add-asin',
  templateUrl: './add-asin.component.html',
  styleUrls: ['./add-asin.component.css']
})
export class AddAsinComponent implements OnInit {
  listingData = {
    Product_ASIN: '',
    Product_name: ''
  }
  response: any;
  constructor(private http: HttpClient) {

  }
  // search() {
  //   this.http.get('https://api.github.com/users/' + this.userName)
  //     .subscribe((response) => {
  //       this.response = response;
  //       console.log(this.response);
  //     })
  // }
  addAsin() {
    this.http.post('http://localhost:3000/api/addListing', this.listingData).subscribe((response) => {
      this.response = response;
      console.log(this.response)
    })
  }

  ngOnInit() {
  }

}
