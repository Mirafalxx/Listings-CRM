import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Partners {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-asin2',
  templateUrl: './add-asin2.component.html',
  styleUrls: ['./add-asin2.component.css']
})
export class AddAsin2Component implements OnInit {
  myForm: FormGroup;
  static url = 'http://localhost:3000/api/';
  response: any;
  constructor(private http: HttpClient) { }
  partner: Partners[] = [
    { value: 'Dima', viewValue: 'Дима' },
    { value: 'Sergei', viewValue: 'Сергей' },
    { value: 'Sema', viewValue: 'Сёма' }
  ];

  ngOnInit() {
    this.createFormControls()
  }

  createFormControls() {
    this.myForm = new FormGroup({
      ProductASIN: new FormControl('', [Validators.required, Validators.minLength(10)]),
      ProductName: new FormControl('', Validators.required),
      Partner: new FormControl('', Validators.required)

    })
  }
  addAsinPartner() {

    let { ProductASIN, ProductName, Partner } = this.myForm.value;

    if (this.myForm.valid) {
      this.http.post('http://localhost:3000/api/addListing2', this.myForm.value).subscribe((response) => {
        this.response = response;
        console.log(this.response);
        this.myForm.reset();
      }
        , err => console.error(err));
      this.myForm.reset();
    }


  }
  get asin() {
    return this.myForm.get('ProductASIN');
  }

  get name() {
    return this.myForm.get('ProductName');
  }

  get partnresName() {
    return this.myForm.get('Partner');
  }

}
