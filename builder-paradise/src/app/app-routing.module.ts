import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserBuildsComponent } from './user-builds/user-builds.component';
import { BuildComponent } from './build/build.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { PopularPartsComponent } from './popular-parts/popular-parts.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-builds', component: UserBuildsComponent},
  { path: 'build', component: BuildComponent},
  { path: 'favourites', component: FavouritesComponent},
  { path: 'create-account', component: NewAccountComponent},
  { path: 'popular-parts', component: PopularPartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
