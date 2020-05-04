import { Component, OnInit } from '@angular/core';
import { ListingService } from '../shared/listing.service';
import { HttpClient } from '@angular/common/http';
import { Listings } from '../listings';
import { GluedListings } from '../gluedListings';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { takeLast } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalWindowComponent } from '../modal-window/modal-window.component';




export interface DialogData {
  animal: string;
  name: string;
}

interface Problem {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-join-asin',
  templateUrl: './join-asin.component.html',
  styleUrls: ['./join-asin.component.css']
})

export class JoinAsinComponent implements OnInit {

  displayedColumns: string[] = ['Asin', 'Partner', 'Listing', 'Title', 'take'];

  selectedRow;
  varAsin: string;
  varName: string;



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  myForm: FormGroup;
  listings: Listings[];
  response: any;


  constructor(private listingServices: ListingService, private http: HttpClient, public dialog: MatDialog) {
  }

  dataSource = new MatTableDataSource;
  ngOnInit() {
    this.getListings();
  }

  onRowClicked(row) {
    console.log(row);
    this.selectedRow = row;
    // console.log(this.selectedRow.ProductASIN);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      data: {
        listingId: this.selectedRow.id,
        Asin: this.selectedRow.ProductASIN,
        Name: this.selectedRow.ProductName,
        newAsin: this.varAsin,
        newName: this.varName,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  getListings = () => {
    this.listingServices.getListing().subscribe((data: any) => {
      this.listings = data;
      this.dataSource = new MatTableDataSource(data)
      console.log(data);
    })
  }
}
