import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ManagerTableComponent } from '../manager-table/manager-table.component';

@Component({
  selector: 'app-return-modal',
  templateUrl: './return-modal.component.html',
  styleUrls: ['./return-modal.component.css']
})
export class ReturnModalComponent implements OnInit {
  response: any;

  constructor(public dialogRef: MatDialogRef<ManagerTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public http: HttpClient) { }


  partnersListing = {
    listID: this.data.listingId,
    OriginalAsin: this.data.Asin,
    OriginalName: this.data.Name,
    NewAsin: this.data.newAsin,
    NewName: this.data.newName,
    Problem: this.data.Problem
  }
  returnedListing = {
    ProductASIN: this.data.Asin,
    ProductName: this.data.Name,
  }

  ngOnInit() {
  }
  returnListing() {
    this.http.post('http://localhost:3000/api/addListing', this.returnedListing).subscribe((response) => {
      this.response = response;
      console.log(response);
    })
    this.deleteListing(this.partnersListing.listID);
  }

  deleteListing = id => {
    this.http.delete(`http://localhost:3000/api/deleteManagerListing/${id}`).subscribe((response) => {
      this.response = response;
      console.log(this.response);
      window.location.reload();
    }, err => console.error(err))
  }

}
