import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-builds',
  templateUrl: './user-builds.component.html',
  styleUrls: ['./user-builds.component.css']
})
export class UserBuildsComponent implements OnInit {

  builds: Object; // build object to map build data
  constructor(private _http: HttpService, private router: Router) { }

  ngOnInit() {
    // Get request to API to get songs  
    this._http.getUserBuilds(localStorage.getItem('userId')).subscribe(data => {
      this.builds = data;
      console.log(this.builds);
    });
  }

}
