import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  fetchBuild(buildNo: number = null) {
    if (!buildNo) 
      return this.http.get('api/build');
    return this.http.get(`api/build?buildNo=${buildNo}`);
  }

  fetchPart(partNo: number) {
    return this.http.get(`api/product/part/${partNo}`);
  }

  fetchPrices(partNo: number) {
    return this.http.get(`api/product/price/${partNo}`);
  }

  fetchStores() {
    return this.http.get(`api/store`);
  }

  login(username: string, password: string) {
    return this.http.post('api/user/validate', {
      'email': username,
      'pass': password
    });
  }

  searchParts(keyword: string) {
    if (keyword == '') {
      return this.http.get(`api/popular-part`);
    }
    return this.http.get(`api/product/search?keyword=${keyword}`);
  }

  addToFav(partNo: Number) {
    return this.http.put(`api/fav-part/${Number(sessionStorage.getItem('user_id'))}`, {
      'partNo': partNo
    });
  }

}
