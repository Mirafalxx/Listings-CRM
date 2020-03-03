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




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddAsinComponent,
    PageNotFoundComponent,
    SplitAsinComponent,
    JoinAsinComponent,
    AuthorizationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
