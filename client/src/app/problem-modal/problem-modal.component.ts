import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';


interface Problem {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-problem-modal',
  templateUrl: './problem-modal.component.html',
  styleUrls: ['./problem-modal.component.css']
})
export class ProblemModalComponent implements OnInit {


  static url: 'http://localhost:3000/api/joinListing';
  public response: any;

  problems: Problem[] = [
    { value: 'Lose BuyBox', viewValue: 'Lose BuyBox' },
    { value: 'Сompetitors appeared', viewValue: 'Сompetitors appeared' },
  ];

  constructor(public dialogRef: MatDialogRef<ProblemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public http: HttpClient) { }


  partnersListing = {
    listID: this.data.listingId,
    OriginalAsin: this.data.Asin,
    OriginalName: this.data.Name,
    NewAsin: this.data.newAsin,
    NewName: this.data.newName,
    Problem: ''
  }

  ngOnInit() {
  }

}




