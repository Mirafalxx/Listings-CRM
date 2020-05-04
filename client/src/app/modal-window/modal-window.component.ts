import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  static url: 'http://localhost:3000/api/joinListing';
  public response: any;



  constructor(
    public dialogRef: MatDialogRef<ModalWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public http: HttpClient) { }




  partnerListing = {
    listID: this.data.listingId,
    OriginalAsin: this.data.Asin,
    OriginalName: this.data.Name,
    NewAsin: '',
    NewName: ''
  }

  ngOnInit() {
  }

  // save() {
  //   this.dialogRef.close('it was saved');
  // }

  addVariation() {
    this.http.post('http://localhost:3000/api/joinListing', this.partnerListing).subscribe((response) => {
      this.response = response;
      console.log(this.response);
      this.dialogRef.close('da')
    }, err => console.error(err));

    this.deleteListing(this.partnerListing.listID);
  }

  deleteListing(listingID) {
    this.http.delete(`http://localhost:3000/api/deleteListing/${listingID}`).subscribe((response) => {
      this.response = response;
      console.log(this.response);
      window.location.reload();
    }, err => console.error(err))
  }


  // addAsin() {
  //   // let { ProductASIN, ProductName } = this.myForm.value;
  //   this.http.post('http://localhost:3000/api/addListing', this.data).subscribe((response) => {
  //     this.response = response;
  //     console.log(this.response);
  //   }, err => console.error(err));
  // }

}
