import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavPartsComponent } from './fav-parts/fav-parts.component';
import { BuildInfoComponent } from './build-info/build-info.component'; 
import { CreateBuildComponent } from './create-build/create-build.component'; 
import { LoginComponent } from './login/login.component';
import { PartComponent } from './part/part.component';
import { PopularPartsComponent } from './popular-parts/popular-parts.component'; 
import { UserBuildsComponent } from './user-builds/user-builds.component'; 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favourite-parts', component: FavPartsComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'create-build', component: CreateBuildComponent }, 
  { path: 'popular-parts', component: PopularPartsComponent },
  { path: 'builds', component: UserBuildsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
