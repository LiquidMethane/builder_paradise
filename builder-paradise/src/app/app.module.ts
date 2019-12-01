import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuildComponent } from './build/build.component';
import { UserBuildsComponent } from './user-builds/user-builds.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { PopularPartsComponent } from './popular-parts/popular-parts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BuildComponent,
    UserBuildsComponent,
    FavouritesComponent,
    NewAccountComponent,
    PopularPartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
