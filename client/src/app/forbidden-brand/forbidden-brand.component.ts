import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { allowedBrand } from '../ListingInfo/allowedBrand'
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrComponent } from '../toastr/toastr.component';
import { ListingService } from '../shared/listing.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BanBrandModalComponent } from '../ban-brand-modal/ban-brand-modal.component';
import { bannedBrand } from '../ListingInfo/bannedBrand';
import { Router, ActivatedRoute } from '@angular/router';


interface Condition {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-forbidden-brand',
  templateUrl: './forbidden-brand.component.html',
  styleUrls: ['./forbidden-brand.component.css']
})
export class ForbiddenBrandComponent implements OnInit {

  myForm: FormGroup;
  constructor(private route: ActivatedRoute, private http: HttpClient, private _snackBar: MatSnackBar, private listingServices: ListingService, public dialog: MatDialog, public router: Router) { }
  condition: Condition[] = [
    { value: 'Banned', viewValue: 'Banned' },
    { value: 'allowed', viewValue: 'allowed' },
  ];
  allowedBrand: allowedBrand[];
  bannedBrand: bannedBrand[];
  selectedRow: any;


  displayedColumns: string[] = ['Brand', 'Status'];
  displayedColumns2: string[] = ['BannedBrand'];

  onRowClicked(row) {
    console.log(row);
    this.selectedRow = row;
  }


  dataSource = new MatTableDataSource;
  dataSource2 = new MatTableDataSource;
  ngOnInit() {
    this.createFormControls();
    this.getAllowedBrand();
    this.getBannedBrand();
  }



  createFormControls() {
    this.myForm = new FormGroup({
      Brand: new FormControl()
    })
  }


  // get brand() {
  //   return this.myForm.get('Brand');
  // }

  addBrand() {
    const Brand = this.myForm.value;
    this.http.post('http://localhost:3000/api/brands/new', Brand).subscribe((response) => {
      console.log(response);
      this.openSnackBar();
      window.location.reload();
    })
  }
  openSnackBar() {
    this._snackBar.openFromComponent(ToastrComponent, {
      duration: 2000,
    });
  }

  getAllowedBrand = () => {
    this.listingServices.getBrand().subscribe((data: any) => {
      this.allowedBrand = data;
      this.dataSource = new MatTableDataSource(data)
      console.log(data);
    })
  }

  getBannedBrand = () => {
    this.listingServices.getforbiddenBrand().subscribe((data2: any) => {
      this.bannedBrand = data2;
      this.dataSource2 = new MatTableDataSource(data2);
    })
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(BanBrandModalComponent, {
      data: {
        BrandId: this.selectedRow.id,
        Brand: this.selectedRow.Brand,
        Status: 'Ban'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }



}
