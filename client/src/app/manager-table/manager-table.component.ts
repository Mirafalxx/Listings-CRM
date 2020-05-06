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
  listings: Listings[];
  response: any;


  constructor(private listingServices: ListingService, private http: HttpClient, public dialog: MatDialog) {
  }

  dataSource = new MatTableDataSource;
  ngOnInit() {
    this.getGluedListings();
  }

  onRowClicked(row) {
    console.log(row);
    this.selectedRow = row;
    // console.log(this.selectedRow.ProductASIN);
  }


  getGluedListings = () => {
    this.listingServices.getGluedListing().subscribe((data: any) => {
      this.listings = data;
      this.dataSource = new MatTableDataSource(data)
      console.log(data);
    })
  }


}
