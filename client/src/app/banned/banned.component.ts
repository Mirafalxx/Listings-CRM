import { Component, OnInit } from '@angular/core';
import { bannedBrand } from '../ListingInfo/bannedBrand';
import { ListingService } from '../shared/listing.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-banned',
  templateUrl: './banned.component.html',
  styleUrls: ['./banned.component.css']
})
export class BannedComponent implements OnInit {
  bannedBrand: bannedBrand[];
  constructor(private listingServices: ListingService) { }


  displayedColumns: string[] = ['Brand', 'Status'];


  dataSource = new MatTableDataSource;

  ngOnInit() {
  }

}
