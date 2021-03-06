import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAsinComponent } from './add-asin/add-asin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JoinAsinComponent } from './join-asin/join-asin.component';
import { AuthorizationComponent } from './login/authorization.component';
import { SplitAsinComponent } from './split-asin/split-asin.component';
import { PartnerTableComponent } from './partner-table/partner-table.component';
import { ProfileComponent } from './profile/profile.component';
import { ManagerTableComponent } from './manager-table/manager-table.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { BrandConditionComponent } from './brand-condition/brand-condition.component';
import { BannedComponent } from './banned/banned.component';
import { TestThingsComponent } from './test-things/test-things.component';
import { AllowedBrandComponent } from './allowed-brand/allowed-brand.component';
import { ForbiddenBrandComponent } from './forbidden-brand/forbidden-brand.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';





const routes: Routes = [
  { path: 'stat', component: TestThingsComponent },
  { path: '', component: AddAsinComponent, canActivate: [AuthGuardService] },
  { path: 'join-asin', component: JoinAsinComponent },
  { path: 'split-asin', component: SplitAsinComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'partnersTable', component: PartnerTableComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'brand-status',
    component: BrandConditionComponent,
    children: [
      { path: 'forbidden', component: ForbiddenBrandComponent },
      { path: 'allowed', component: AllowedBrandComponent }
    ]

  },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'manager-table', component: ManagerTableComponent },
  { path: 'banned', component: BannedComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  TestThingsComponent,
  AddAsinComponent,
  JoinAsinComponent,
  SplitAsinComponent,
  AuthorizationComponent,
  PartnerTableComponent,
  ProfileComponent,
  BrandConditionComponent,
  ForbiddenBrandComponent,
  ManagerTableComponent,
  BannedComponent,
  PageNotFoundComponent
]
