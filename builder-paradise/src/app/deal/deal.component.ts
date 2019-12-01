import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent implements OnInit {

  deals: Object = null;
  dealsLoaded: boolean = false;
  displayedColumns: string[] = ['name', 'store', 'price'];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.fetchDeals();
  }

  fetchDeals() {
    this.dealsLoaded = false;
    this._http.fetchDeals().subscribe(deals => {
      this.deals = deals;
      this.dealsLoaded = true;
    })
  }

}
