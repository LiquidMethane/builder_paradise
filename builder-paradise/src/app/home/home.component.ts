import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  buildsLoaded: Boolean = false;
  buildpartsLoaded: boolean = false;

  builds: Object;
  buildparts: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.fetchBuild();
  }

  fetchBuild(buildNo: number = null) {
    if (!buildNo) {
      this.buildsLoaded = false;
      this._http.fetchBuild().subscribe(builds => {
        this.builds = builds;
        this.buildsLoaded = true;
        console.log(this.builds);
      })
    } else {
      this.buildpartsLoaded = false;
      this._http.fetchBuild(buildNo).subscribe(parts => {
        this.buildparts = parts;
        this.buildpartsLoaded = true;
        console.log(this.buildparts);
      })
    }

  }

}
