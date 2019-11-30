import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {

  parts: Object; // part object to map build data
  buildName: Object; 
  priceInfo:Object; 

  constructor(private _http: HttpService, private router: Router) { }

  ngOnInit() {
    this.buildName = history.state.data.build_name;
    let build_id = history.state.data.build_id; 
    // Get request to API to get builds  
    this._http.getBuildInfo(build_id).subscribe(data => {
      this.parts = data;
      console.log(this.parts);
    });

    this._http.getBuildPrice(build_id).subscribe(data => {
      this.priceInfo = data; 
      console.log(this.priceInfo);
    })
  }
}
