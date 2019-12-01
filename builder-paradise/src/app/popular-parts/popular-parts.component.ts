import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-parts',
  templateUrl: './popular-parts.component.html',
  styleUrls: ['./popular-parts.component.scss']
})
export class PopularPartsComponent implements OnInit {

  parts: Object; // build object to map build data
  constructor(private _http: HttpService, private router: Router) { }

  ngOnInit() {
    // Get request to API to get builds  
    this._http.getPopularParts().subscribe(data => {
      this.parts = data;
      console.log(this.parts);
    });
  }

}
