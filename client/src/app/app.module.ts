import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddAsinComponent } from './add-asin/add-asin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SplitAsinComponent } from './split-asin/split-asin.component';
import { JoinAsinComponent } from './join-asin/join-asin.component';
import { AuthorizationComponent } from './login/authorization.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input';
import { ListingsComponent } from './listings/listings.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { PartnerTableComponent } from './partner-table/partner-table.component';
import { MatTableModule } from '@angular/material/table';
// import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { ModalWindowComponent } from '../app/modal-window/modal-window.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfileComponent } from './profile/profile.component';
import { ToastrComponent } from './toastr/toastr.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ManagerTableComponent } from './manager-table/manager-table.component';
import { ProblemModalComponent } from './problem-modal/problem-modal.component';
import { MatCardModule } from '@angular/material/card';
import { ReturnModalComponent } from './return-modal/return-modal.component';
import { BrandConditionComponent } from './brand-condition/brand-condition.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BannedComponent } from './banned/banned.component';
import { BanBrandModalComponent } from './ban-brand-modal/ban-brand-modal.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TestThingsComponent } from './test-things/test-things.component';
import { MatIconModule } from '@angular/material/icon';
import { CalendarComponent } from './calendar/calendar.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { SelectorComponent } from './selector/selector.component'




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddAsinComponent,
    PageNotFoundComponent,
    SplitAsinComponent,
    JoinAsinComponent,
    AuthorizationComponent,
    ListingsComponent,
    PartnerTableComponent,
    ModalWindowComponent,
    ProfileComponent,
    ToastrComponent,
    ManagerTableComponent,
    ProblemModalComponent,
    ReturnModalComponent,
    BrandConditionComponent,
    BannedComponent,
    BanBrandModalComponent,
    TestThingsComponent,
    CalendarComponent,
    OrganizerComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  entryComponents: [
    ModalWindowComponent,
    ToastrComponent,
    ProblemModalComponent,
    ReturnModalComponent,
    BanBrandModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
