import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-join-asin',
  templateUrl: './join-asin.component.html',
  styleUrls: ['./join-asin.component.css']
})



export class JoinAsinComponent implements OnInit {

  constructor(private http: HttpClient) {

  }
  getListinData() {
    this.http.get<any>('http://localhost:3000/api/getListings').subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit() {
    this.getListinData();
  }
}
