import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private relUrl = window.location.protocol + '//' + window.location.hostname + ':4200';

     
  login(email:string, pass:string ) {
    return this.http.post(this.relUrl + '/api/user/validate', {email, pass}) // Make request to api for login verification and token
           .pipe(tap(res => this.setSession(res)), shareReplay());
  }

  // Store the user id in client's local storage 
  private setSession(authResult) {
      localStorage.setItem('userId', authResult.user_id);
  }

  getUserBuilds(user_id:string){
    return this.http.get(this.relUrl + '/api/build/' + user_id); 
  }

  getBuildInfo(build_id){
    return this.http.get(this.relUrl + '/api/build-parts/' + build_id); 
  }

  getBuildPrice(build_id){
    return this.http.get(this.relUrl + '/api/build/price-list/' + build_id);
  }

  getFavourites(user_id){
    return this.http.get(this.relUrl + '/api/fav-part/' + user_id); 
  }
}
