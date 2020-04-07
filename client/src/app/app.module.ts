import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddAsinComponent } from './add-asin/add-asin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SplitAsinComponent } from './split-asin/split-asin.component';
import { JoinAsinComponent } from './join-asin/join-asin.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input';
import { ListingsComponent } from './listings/listings.component';
import { AddAsin2Component } from './add-asin2/add-asin2.component';
import { MatSelectModule } from '@angular/material/select';


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
    AddAsin2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
