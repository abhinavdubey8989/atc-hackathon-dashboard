import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ChartService } from 'src/app/services/chart.service';
import { ApiService } from 'src/app/services/api.service';

export interface PeriodicElement {
  aggregator: string;
  revenue: string;
  tcost: string;
  mcost: string;
  profit: string;
  margin: string;
  orevenue: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    aggregator: 'Google',
    revenue: '$2428',
    tcost: '$300',
    mcost: '$27080',
    profit: '$4180',
    margin: '$4480',
    orevenue: '$31560',
  },
  {
    aggregator: 'MOPUB',
    revenue: '$3150',
    tcost: '$300',
    mcost: '$22440',
    profit: '$2460',
    margin: '$2760',
    orevenue: '$25200',
  },
  {
    aggregator: 'APPLOVIN',
    revenue: '$1857',
    tcost: '$300',
    mcost: '$13870',
    profit: '$2550',
    margin: '$2850',
    orevenue: '$16720',
  },
  {
    aggregator: 'INMOBI',
    revenue: '$1257',
    tcost: '$100',
    mcost: '$27080',
    profit: '$4180',
    margin: '$1030',
    orevenue: '$11310',
  },
  {
    aggregator: 'FYBER',
    revenue: '$1141',
    tcost: '$100',
    mcost: '$8930',
    profit: '$1250',
    margin: '$1340',
    orevenue: '$10270',
  }

];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  message = {
    type: 'success',
    text: 'Affle Intellisense says : hello'
  }

  bigChart = [];

  Geo = [
    { id: 1, name: 'India' },
    { id: 1, name: 'USA' },
    { id: 1, name: 'UK' },
    { id: 1, name: 'indonesia' },
  ];

  OS = [
    { id: 1, name: 'Android' },
    { id: 2, name: 'iOS' },
    { id: 3, name: 'Both' }
  ];

  cType = [
    { id: 1, name: 'UA' },
    { id: 2, name: 'RT' },
    { id: 3, name: 'Both' },
  ];


  crSize = [
    { id: 1, name: '320x480' },
    { id: 2, name: '120x360' },
    { id: 2, name: '100x460' },
    { id: 2, name: '520x480' },
    { id: 2, name: '150x300' },
  ]

  selectedCtype = 'Both';
  selectedOStype = 'Both';


  // displayedColumns: string[] = ['aggregator', 'revenue', 'tcost', 'mcost', 'profit', 'margin', 'orevenue'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns: string[] = ['name', 'revenue', 'tcost', 'mcost', 'profit', 'margin', 'orevenue'];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  median: any;

  constructor(
    private dashboardService: DashboardService,
    private chartService: ChartService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    // this.bigChart = this.dashboardService.bigChart();
    // this.dataSource.paginator = this.paginator;

    this.apiService.getSSPChartData().subscribe(resp => {
      this.bigChart = resp.data;
      this.dataSource = new MatTableDataSource<any>(resp.data);
      this.dataSource.paginator = this.paginator;

      let temp: number[] = resp.data.map(x => x.orevenue);
      // temp.sort();
      temp.sort(function (a, b) { return a > b ? 1 : -1 });
      this.median = temp[1];

      this.selectedCtype = 'Both';
      this.selectedOStype = 'Both';
    });

  }


  dateChange(from: number, event: any) {
    // console.log(event);
  }


  osChange(event: any) {
    let per = 0;
    this.selectedOStype = event;

    if (event == 'iOS') {
      per = 0.3;
    } else if (event == 'Android') {
      per = 0.7;
    } else {
      per = 1;
    }

    if (this.selectedCtype == 'UA') {
      per = per * 0.4;
    } else if (this.selectedCtype == 'RT') {
      per = per * 0.6;
    } else {
      per = per * 1;
    }

    this.apiService.getPercent(per).subscribe(resp => {
      this.bigChart = resp.data;
      this.dataSource = new MatTableDataSource<any>(resp.data);
      this.dataSource.paginator = this.paginator;

      let temp: number[] = resp.data.map(x => x.orevenue);
      // temp.sort();
      temp.sort(function (a, b) { return a > b ? 1 : -1 });

      this.median = temp[1];
    });
  }


  ctChange(event) {
    let per = 0;
    this.selectedCtype = event;

    if (event == 'UA') {
      per = 0.4;
    } else if (event == 'RT') {
      per = 0.6;
    } else {
      per = 1;
    }

    if (this.selectedOStype == 'Android') {
      per = per * 0.7;
    } else if (this.selectedCtype == 'iOS') {
      per = per * 0.3;
    } else {
      per = per * 1;
    }

    this.apiService.getPercent(per).subscribe(resp => {
      this.bigChart = resp.data;
      this.dataSource = new MatTableDataSource<any>(resp.data);
      this.dataSource.paginator = this.paginator;

      let temp: number[] = resp.data.map(x => x.orevenue);
      // temp.sort();
      temp.sort(function (a, b) { return a > b ? 1 : -1 });

      this.median = temp[1];
    });
  }

}
