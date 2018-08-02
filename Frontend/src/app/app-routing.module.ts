import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShareComponent } from './share/share.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:type', component: HomeComponent },
  { path: 'share', component: ShareComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
