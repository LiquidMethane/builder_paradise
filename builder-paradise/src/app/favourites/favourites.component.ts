import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favs: Object; // build object to map build data
  constructor(private _http: HttpService, private router: Router) { }

  ngOnInit() {
    // Get request to API to get builds  
    this._http.getFavourites(localStorage.getItem('userId')).subscribe(data => {
      this.favs = data;
      console.log(this.favs);
    });
  }


}
