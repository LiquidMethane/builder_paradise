import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as CanvasJS from '../canvasjs.min';
import { HttpService } from '../http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss']
})
export class PartComponent implements OnInit {

  partLoaded: boolean = false;
  pricesLoaded: boolean = false;
  partNo: number = null;
  part: Object = null;
  price_list: Object = [];
  store_list: Object = [];
  priceData: Object = [[], [], [], [], [], [], []];

  builds: Object = null;
  form: FormGroup;


  constructor(private _route: ActivatedRoute, private _http: HttpService, private fb: FormBuilder, private _router: Router) {
    this._route.params.subscribe(params => this.partNo = params.partNo);
    this.form = this.fb.group({
      buildNo: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.fetchPart(this.partNo);
    this.fetchStoreList();
    this.fetchBuildList(Number(sessionStorage.getItem('user_id')));

  }

  fetchPart(partNo: number) {
    this.partLoaded = false;
    this._http.fetchPart(partNo).subscribe(part => {
      this.part = part;
      this.partLoaded = true;
      console.log(part);
    });

  }

  fetchPriceList(partNo: number) {
    this.pricesLoaded = false;
    this._http.fetchPrices(partNo).subscribe(prices => {
      this.price_list = prices;
      this.pricesLoaded = true;
      console.log(this.price_list);

      for (let i = 0; i < 42; i++) {
        this.priceData[Number(this.price_list[i].storeNo) - 1].push({
          x: new Date(this.price_list[i].inventoryDate),
          y: this.price_list[i].price,
        })
      }

      this.buildChart();
    });
  }

  fetchStoreList() {
    this._http.fetchStores().subscribe(stores => {
      this.store_list = stores;
      this.fetchPriceList(this.partNo);
    });
  }

  buildChart() {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: "Historical Prices"
      },
      axisX: {
        valueFormatString: "MMM YYYY"
      },
      axisY2: {
        title: "Price",
        prefix: "$",
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor: "pointer",
        verticalAlign: "top",
        horizontalAlign: "center",
        dockInsidePlotArea: true,

      },
      data: [
        {
          type: 'line',
          axisYType: "secondary",
          name: this.store_list[0].storeName,
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###",
          dataPoints: this.priceData[0],
        },
        {
          type: 'line',
          axisYType: "secondary",
          name: this.store_list[1].storeName,
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###",
          dataPoints: this.priceData[1],
        },
        {
          type: 'line',
          axisYType: "secondary",
          name: this.store_list[2].storeName,
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###",
          dataPoints: this.priceData[2],
        },
        {
          type: 'line',
          axisYType: "secondary",
          name: this.store_list[3].storeName,
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###",
          dataPoints: this.priceData[3],
        },
        {
          type: 'line',
          axisYType: "secondary",
          name: this.store_list[4].storeName,
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###",
          dataPoints: this.priceData[4],
        },
        {
          type: 'line',
          axisYType: "secondary",
          name: this.store_list[5].storeName,
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###",
          dataPoints: this.priceData[5],
        },
        {
          type: 'line',
          axisYType: "secondary",
          name: this.store_list[6].storeName,
          showInLegend: true,
          markerSize: 0,
          yValueFormatString: "$#,###",
          dataPoints: this.priceData[6],
        }
      ]
    })

    chart.render();

  }

  fetchBuildList(user_id: Number) {
    this._http.fetchUserBuilds(user_id).subscribe(builds => {
      this.builds = builds;
    })
  }

  addToBuild() {
    const val = this.form.value;

    if (val.buildNo) {
      this._http.addToBuild(this.partNo, val.buildNo).subscribe(result => {
        alert(JSON.stringify(result));
      },
        err => {
          alert(err.error);
        }
      )
    } else {
      this._router.navigateByUrl('/');
    }
  }

}
