import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartComponent } from './part/part.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'part/:partNo', component: PartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
