import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-builds',
  templateUrl: './user-builds.component.html',
  styleUrls: ['./user-builds.component.scss']
})
export class UserBuildsComponent implements OnInit {

  builds: Object; // build object to map build data
  constructor(private _http: HttpService, private router: Router) { }

  ngOnInit() {
    // Get request to API to get builds  
    this._http.getUserBuilds(localStorage.getItem('userId')).subscribe(data => {
      this.builds = data;
      console.log(this.builds);
    });
  }

  // Navigate to a new component for showing info of one build and pass the build id 
  getBuildInfo(build_id, build_name){
      this.router.navigate(['/build'], {state: {data: {build_id, build_name}}});
  }

}
