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

  typeDict: {[id: string]: string} = {};

  constructor(private _http: HttpService) {
    this.typeDict['pccpu'] = 'CPU';
    this.typeDict['pccooler'] = 'Cooler';
    this.typeDict['pcmotherboard'] = 'Motherboard';
    this.typeDict['pcmemory'] = 'Memory';
    this.typeDict['pcgraphicscard'] = 'Graphics Card';
    this.typeDict['pcpowersupply'] = 'Power Supply';
    this.typeDict['pcstorage'] = 'Storage';
    this.typeDict['pccase'] = 'Case';
   }

  ngOnInit() {
    this.fetchBuild();

  }

  fetchBuild(buildNo: number = null) {
    if (!buildNo) {
      this.buildsLoaded = false;
      this._http.fetchBuild().subscribe(builds => {
        this.builds = builds;
        this.buildsLoaded = true;

      })
    } else {
      this.buildpartsLoaded = false;
      this._http.fetchBuild(buildNo).subscribe(parts => {
        this.buildparts = parts;
        this.buildpartsLoaded = true;

      })
    }

  }

}
