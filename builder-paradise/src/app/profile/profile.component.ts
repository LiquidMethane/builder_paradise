import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user_id: Number = null;
  user_nickname: string = null;
  builds: Object = null;
  buildsLoaded: boolean = false;
  buildparts: Object = null;
  priceList: Object = null;
  priceListLoaded: boolean = false;
  favparts: Object = null;
  typeDict: { [id: string]: string } = {};

  form: FormGroup;
  updateName: FormGroup;

  constructor(private _http: HttpService, private _router: Router, private fb: FormBuilder) {
    this.typeDict['pccpu'] = 'CPU';
    this.typeDict['pccooler'] = 'Cooler';
    this.typeDict['pcmotherboard'] = 'Motherboard';
    this.typeDict['pcmemory'] = 'Memory';
    this.typeDict['pcgraphicscard'] = 'Graphics Card';
    this.typeDict['pcpowersupply'] = 'Power Supply';
    this.typeDict['pcstorage'] = 'Storage';
    this.typeDict['pccase'] = 'Case';

    this.form = this.fb.group({
      name: ['', Validators.required]
    });

    this.updateName = this.fb.group({
      newName: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (!sessionStorage.getItem('user_id'))
      return this._router.navigateByUrl('/login');
    else {
      this.user_id = Number(sessionStorage.getItem('user_id'));
      this.user_nickname = sessionStorage.getItem('user_nickname');
    }
    this.fetchUserBuilds(this.user_id);
    this.fetchFavParts(this.user_id);
  }

  fetchUserBuilds(user_id: Number) {
    this.buildsLoaded = false;
    this._http.fetchUserBuilds(user_id).subscribe(builds => {
      this.builds = builds;
      this.buildsLoaded = true;
      console.log(builds);
    })
  }

  fetchBuildParts(buildNo: number) {
    this._http.fetchBuild(buildNo).subscribe(parts => {
      this.buildparts = parts;
      this.fetchPriceList(buildNo);
    })
  }

  fetchPriceList(buildNo: number) {
    this.priceListLoaded = false;
    this._http.fetchBuildPrices(buildNo).subscribe(priceList => {
      this.priceList = priceList;
      this.priceListLoaded = true;
    })
  }

  fetchFavParts(user_id: Number) {
    this._http.fetchFavParts(user_id).subscribe(favparts => {
      this.favparts = favparts;
    })
  }

  logOut() {
    sessionStorage.clear();
    this._router.navigateByUrl('/');
  }

  createBuild() {
    const val = this.form.value;

    if (val.name) {
      this._http.createBuild(val.name, Number(sessionStorage.getItem('user_id'))).subscribe(result => {
        alert(JSON.stringify(result));

      },
        err => {
          alert(err.error);
        }
      )
    }
  }

  updateBuildName(buildNo: Number) {
    const val = this.updateName.value;

    if (val.newName) {
      this._http.updateBuildName(buildNo, val.newName).subscribe(result => {
        alert(JSON.stringify(result));
      },
        err => {
          alert(err.error);
        }
      )
    }
  }

  deletePart(buildNo: Number, partNo: Number) {
    this._http.deletePart(buildNo, partNo).subscribe(result => {
      alert(JSON.stringify(result));
    },
      err => {
        alert(err.error);
      }
    )
  }

}
