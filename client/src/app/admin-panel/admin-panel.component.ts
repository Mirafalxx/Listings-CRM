import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ControlContainer } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ListingService } from '../shared/listing.service';
import { Users } from '../ListingInfo/user';
import { ToastrComponent } from '../toastr/toastr.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ThrowStmt } from '@angular/compiler';
import { MatTableDataSource } from '@angular/material/table';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';

interface Role {
  value: string;
  viewValue: string;
}

interface Department {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})




export class AdminPanelComponent implements OnInit {
  panelOpenState = false;
  url1 = 'http://localhost:3000/api';
  RegistrationForm: FormGroup;
  response: any;
  submitted = false;

  displayedColumns: string[] = ['Login', 'Role', 'Edit'];
  displayedColumns2: string[] = ['name', 'count', 'department'];

  selectedRow;


  role: Role[] = [
    { value: 'Техник', viewValue: 'Техник' },
    { value: 'Серчер', viewValue: 'Серчер' },
    { value: 'Админ', viewValue: 'Админ' },
    { value: 'Менеджер', viewValue: 'Менеджер' }
  ];

  department: Department[] = [
    { value: 'Юры', viewValue: 'Юры' },
    { value: 'Макса', viewValue: 'Макса' },
    { value: 'Эмиля', viewValue: 'Эмиля' }
  ]

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private regUser: ListingService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  dataSource = new MatTableDataSource;
  dataSource2 = new MatTableDataSource;

  user1: Users[];


  ngOnInit() {
    this.RegistrationForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      department: ['', Validators.required]
    });


    this.getUser();
    this.getStat();
  }

  onRowClicked(row) {
    console.log(row);
    this.selectedRow = row;
    // console.log(this.selectedRow.ProductASIN);
  }

  openEditModal(): void {
    const dialogRef = this.dialog.open(EditUserModalComponent, {

      data: {
        userid: this.selectedRow.id,
        email: this.selectedRow.email,
        role: this.selectedRow.role,
      }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


  registrationUser() {
    const { email, password, role } = this.RegistrationForm.value;

    let user: Users = {
      email,
      password,
      role
    }
    this.submitted = true;
    if (this.RegistrationForm.invalid) return;


    return this.regUser.addUser(user).subscribe((response) => {
      this.response = response;

      console.log(this.response);
      this.openSnackBar();
      window.location.reload();
    }, err => console.error(err));

  }

  openSnackBar() {
    this._snackBar.openFromComponent(ToastrComponent, {
      duration: 2000,
    });
  }

  getUser() {
    return this.http.get('http://localhost:3000/api/auth/all').subscribe((data: any) => {
      this.user1 = data;
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    })
  }

  getStat() {
    return this.http.get('http://localhost:3000/api/stat/all').subscribe((data: any) => {
      this.dataSource2 = new MatTableDataSource(data);
      console.log(data);
    })
  }


  // getProblemsListings() {
  //   this.http.get('http://localhost:3000/api/problem-variationsListing/all').subscribe((data: any) => {
  //     this.user1 = data;
  //     this.dataSource = new MatTableDataSource(data);
  //     console.log(data);
  //   })
  // }





  get f() { return this.RegistrationForm.controls }
}
