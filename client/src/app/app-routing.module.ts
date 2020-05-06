import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAsinComponent } from './add-asin/add-asin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JoinAsinComponent } from './join-asin/join-asin.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { SplitAsinComponent } from './split-asin/split-asin.component';
import { AddAsin2Component } from './add-asin2/add-asin2.component';
import { PartnerTableComponent } from './partner-table/partner-table.component';
import { ProfileComponent } from './profile/profile.component';
import { ManagerTableComponent } from './manager-table/manager-table.component';





const routes: Routes = [
  { path: '', component: AddAsinComponent },
  { path: 'join-asin', component: JoinAsinComponent },
  { path: 'addAsin', component: AddAsin2Component },
  { path: 'split-asin', component: SplitAsinComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'partnersTable', component: PartnerTableComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'manager-table', component: ManagerTableComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
