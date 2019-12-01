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

  login(email: string, password: string) {
    return this.http.post('api/user', {
      'email': email,
      'pass': password
    });
  }

  signup(username: string, email: string, password: string) {
    return this.http.put('api/user', {
      'username': username,
      'email': email,
      'pass': password,
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

  fetchDeals() {
    return this.http.get('api/product/deals');
  }

  fetchUserBuilds(user_id: Number) {
    return this.http.get(`api/build/${user_id}`);
  }

  fetchBuildPrices(buildNo: Number) {
    return this.http.get(`api/build/price-list/${buildNo}`);
  }

  fetchFavParts(user_id: Number) {
    return this.http.get(`api/fav-part/${user_id}`);
  }

  createBuild(name: string, user_id: Number) {
    return this.http.put('api/build', {
      'build_name': name,
      'user_id': user_id
    });
  }

  addToBuild(partNo: Number, buildNo: Number) {
    return this.http.put(`api/add-part/${buildNo}`, {
      'partNo': partNo
    });
  }

  updateBuildName(buildNo: Number, buildName: string) {
    return this.http.post(`api/build?buildNo=${buildNo}`, {
      'buildName': buildName
    });
  }

  deletePart(buildNo: Number, partNo: Number) {
    return this.http.delete(`api/remove-part/${buildNo}?partNo=${partNo}`);
  }

}
