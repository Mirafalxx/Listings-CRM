import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAsinComponent } from './add-asin/add-asin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JoinAsinComponent } from './join-asin/join-asin.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { SplitAsinComponent } from './split-asin/split-asin.component';




const routes: Routes = [
  { path: '', component: AddAsinComponent },
  { path: 'join-asin', component: JoinAsinComponent },
  { path: 'split-asin', component: SplitAsinComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
