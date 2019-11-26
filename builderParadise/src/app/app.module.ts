import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavPartsComponent } from './fav-parts/fav-parts.component';
import { HomeComponent } from './home/home.component';
import { UserBuildsComponent } from './user-builds/user-builds.component';
import { LoginComponent } from './login/login.component';
import { PopularPartsComponent } from './popular-parts/popular-parts.component';
import { PartComponent } from './part/part.component';
import { CreateBuildComponent } from './create-build/create-build.component';
import { BuildInfoComponent } from './build-info/build-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FavPartsComponent,
    HomeComponent,
    UserBuildsComponent,
    LoginComponent,
    PopularPartsComponent,
    PartComponent,
    CreateBuildComponent,
    BuildInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
