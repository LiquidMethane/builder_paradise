import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartComponent } from './part/part.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { DealComponent } from './deal/deal.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'part/:partNo', component: PartComponent },
  { path: 'login', component: LoginComponent},
  { path: 'search', component: SearchComponent },
  { path: 'deal', component: DealComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
