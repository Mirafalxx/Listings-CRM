import { Component, OnInit } from '@angular/core';
import { ListingService } from '../shared/listing.service';
import { HttpClient } from '@angular/common/http';
import { Listings } from '../ListingInfo/listings';
import { GluedListings } from '../ListingInfo/gluedListings';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { takeLast } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { managerListing } from '../ListingInfo/managerListing';
import { ReturnModalComponent } from '../return-modal/return-modal.component';




export interface DialogData {
  animal: string;
  name: string;
}

interface Problem {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-manager-table',
  templateUrl: './manager-table.component.html',
  styleUrls: ['./manager-table.component.css']
})




export class ManagerTableComponent implements OnInit {

  displayedColumns: string[] =
    ['OriginalAsin',
      'OriginalName', 'NewAsin', 'NewName',
      'Partner', 'Problem', 'returnListing'];

  selectedRow;
  varAsin: string;
  varName: string;



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  myForm: FormGroup;
  // listings: Listings[];
  managerListing: managerListing[];
  response: any;


  constructor(private listingServices: ListingService, private http: HttpClient, public dialog: MatDialog) {
  }

  dataSource = new MatTableDataSource;
  ngOnInit() {
    // this.getGluedListings();
    this.getProblemsListings();
  }

  onRowClicked(row) {
    console.log(row);
    this.selectedRow = row;
    // console.log(this.selectedRow.ProductASIN);
  }


  openReturnModal(): void {
    const dialogRef = this.dialog.open(ReturnModalComponent, {
      data: {
        listingId: this.selectedRow.id,
        Asin: this.selectedRow.OriginalAsin,
        Name: this.selectedRow.OriginalName,
        newAsin: this.selectedRow.NewAsin,
        newName: this.selectedRow.NewName,
        Problem: this.selectedRow.Problem
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


  getProblemsListings() {
    this.http.get('http://localhost:3000/api/problem-variationsListing/all').subscribe((data: any) => {
      this.managerListing = data;
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    })
  }




}
