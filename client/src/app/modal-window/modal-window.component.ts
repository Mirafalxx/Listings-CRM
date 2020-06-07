import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  static url: 'http://localhost:3000/api/joinListing';
  public response: any;
  form: FormGroup;
  private formSubmitAttempt: boolean;



  constructor(
    public dialogRef: MatDialogRef<ModalWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public http: HttpClient, private fb: FormBuilder) { }

  partnerListing = {
    listID: this.data.listingId,
    OriginalAsin: this.data.Asin,
    OriginalName: this.data.Name,
    NewAsin: '',
    NewName: ''
  }
  ngOnInit() {
    this.form = this.fb.group({
      NewAsin: ['', Validators.required],
      NewName: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  addVariation() {
    this.http.post('http://localhost:3000/api/variation-listings/new', this.partnerListing).subscribe((response) => {
      this.response = response;
      console.log(this.response);
      this.dialogRef.close('da')
    }, err => console.error(err));

    this.deleteListing(this.partnerListing.listID);
  }

  deleteListing(listingID) {
    this.http.delete(`http://localhost:3000/api/listings/delete/${listingID}`).subscribe((response) => {
      this.response = response;
      console.log(this.response);
      window.location.reload();
    }, err => console.error(err))
  }




}
