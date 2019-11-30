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
  constructor(private _http: HttpService, private router: Router) { }

  ngOnInit() {
    this.buildName = history.state.data.build_name;
    // Get request to API to get builds  
    this._http.getBuildInfo(history.state.data.build_id).subscribe(data => {
      this.parts = data;
      console.log(this.parts);
    });
  }
}
