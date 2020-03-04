import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-add-asin',
  templateUrl: './add-asin.component.html',
  styleUrls: ['./add-asin.component.css']
})
export class AddAsinComponent implements OnInit {
  asing: string = '';
  productName: string = ''

  constructor(private http: HttpClient) {


  }

  ngOnInit() {
  }

}
