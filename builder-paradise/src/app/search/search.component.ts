import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  keyword: string = null;
  parts: Object = null;
  partsLoaded: boolean = false;
  displayedColumns: string[] = ['name', 'occurance', 'button'];
  displayedColumnsSearch: string[] = ['name', 'specs', 'button'];

  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
    this.searchParts();
  }

  addToFav(partNo: Number) {
    if (!sessionStorage.getItem('user_id')) {
      this._router.navigateByUrl('/login');
    } else {
      this._http.addToFav(partNo).subscribe(result => {
        alert('Part Added To Your Favourite List.');
      },
      err => {
        console.log(err);
      }
      )
    }
  }

  searchParts(keyword: string = '') {
    this.keyword = keyword;
    this.partsLoaded = false;
    this._http.searchParts(keyword).subscribe(parts => {
      this.parts = parts;
      // console.log(parts);
      this.partsLoaded = true;
    })
  }

}
