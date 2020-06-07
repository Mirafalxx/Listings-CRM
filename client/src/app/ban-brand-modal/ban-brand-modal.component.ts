import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ban-brand-modal',
  templateUrl: './ban-brand-modal.component.html',
  styleUrls: ['./ban-brand-modal.component.css']
})
export class BanBrandModalComponent implements OnInit {
  public response: any;
  constructor(
    public dialogRef: MatDialogRef<BanBrandModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public http: HttpClient, private fb: FormBuilder) { }

  statusBanned = 'Banned';


  brandCondition = {
    brandID: this.data.BrandId,
    Brand: this.data.Brand,
    Status: this.data.Status
  }

  ngOnInit() {
  }

  banBrand() {
    this.http.post('http://localhost:3000/api/bannedBrand', this.brandCondition).subscribe((response) => {
      this.response = response;
      console.log(this.response);
      this.dialogRef.close('da')
    }, err => console.error(err));
    this.deleteAllowedBrand(this.brandCondition.brandID);
  }



  deleteAllowedBrand(brandID) {
    this.http.delete(`http://localhost:3000/api/brands/delete/${brandID}`).subscribe((response) => {
      this.response = response;
      console.log(this.response);
      window.location.reload();
    }, err => console.error(err))
  }

}


