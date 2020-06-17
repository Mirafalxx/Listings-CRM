
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { ThrowStmt } from '@angular/compiler';


interface Role {
  value: string;
  viewValue: string;
}

interface Department {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent implements OnInit {

  response: any;
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

  constructor(public dialogRef: MatDialogRef<AdminPanelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public http: HttpClient) { }





  userInfo = {
    userid: this.data.userid,
    email: this.data.email,
    role: this.data.role,
    department: this.data.department
  }

  ngOnInit() {
  }

  editUser() {

    this.http.put(`http://localhost:3000/api/auth/update/${this.userInfo.userid}`, this.userInfo).subscribe((response) => {
      this.response = response;
      console.log(this.response);
      this.dialogRef.close('da')
      window.location.reload();
    }, err => console.error(err));
    // this.deleteUser(this.userInfo.userid)
  }

  deleteUser() {
    this.handlerDeleteFunc(this.userInfo.userid)
  }

  handlerDeleteFunc(userId) {
    this.http.delete(`http://localhost:3000/api/auth/delete/${userId}`).subscribe((response) => {
      this.response = response;
      console.log(this.response);
      window.location.reload();
    }, err => console.error(err))
  }

}
