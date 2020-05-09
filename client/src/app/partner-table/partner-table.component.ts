import { Component, OnInit } from '@angular/core';
import { ListingService } from '../shared/listing.service';
import { managerListing } from '../ListingInfo/managerListing'
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ProblemModalComponent } from '../problem-modal/problem-modal.component';


interface Problem {
  value: string;
  viewValue: string;
};


@Component({
  selector: 'app-partner-table',
  templateUrl: './partner-table.component.html',
  styleUrls: ['./partner-table.component.css']
})
export class PartnerTableComponent implements OnInit {
  listings: managerListing[];
  selectedRow;
  response;


  displayedColumns: string[] = ['OriginalAsin', 'OriginalName', 'NewAsin', 'NewName', 'takeProblem', 'Partner'];



  constructor(private listingServices: ListingService, private http: HttpClient, public dialog: MatDialog) { }

  problem: Problem[] = [
    { value: 'Lose  buybox', viewValue: 'Lose  buybox' },
    { value: 'Сompetitors', viewValue: 'Сompetitors' },
    { value: 'Canceled by partner', viewValue: 'Canceled by partner' }
  ];



  dataSource = new MatTableDataSource;
  ngOnInit() {
    this.getGluedListings();
  }

  onRowClicked(row) {
    console.log(row);
    this.selectedRow = row;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProblemModalComponent, {
      data: {
        listingId: this.selectedRow.id,
        Asin: this.selectedRow.OriginalAsin,
        Name: this.selectedRow.OriginalName,
        newAsin: this.selectedRow.NewAsin,
        newName: this.selectedRow.NewName,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }



  getGluedListings = () => {
    this.listingServices.getGluedListing().subscribe((data: any) => {
      this.listings = data;
      this.dataSource = new MatTableDataSource(data)
      console.log(data);
    })
  }

}
