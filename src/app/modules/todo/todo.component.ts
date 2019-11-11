import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { MatTableDataSource, MatPaginator } from '@angular/material';


export interface PeriodicElement {
  name: string;
  cmpStart: string;
  cmpType: string;
  advName: string;
  geo: string;
  adSize: string;
  os: string;
  demand: string;
  traffic: string

}
// const ELEMENT_DATA: PeriodicElement[] = [
//   { advName: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { advName: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
// ];


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


  displayedColumns: string[] = ['name', 'cmpStart', 'cmpType', 'advName',
    'geo', 'adSize', 'os', 'demand', 'traffic'];

  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  @ViewChild(MatAccordion, { static: false }) accordion: MatAccordion;


  data = [
    {
      location: 'India',
      isRed: true,
      received: new Date(2020, 11, 16).toLocaleDateString(),
      description: 'Youappi main: We are getting less than 300M bid requests daily for India',
      flag: 'assets/india.png',
      showTable: true,
      table: new MatTableDataSource<PeriodicElement>([{
        name: 'Youappi main',
        cmpStart: new Date(2020, 11, 17).toLocaleDateString(),
        cmpType: 'RT',
        advName: 'YouAppi',
        geo: 'India',
        adSize: '320x480',
        os: 'iOS',
        demand: 'high',
        traffic: '410 million per day'

      }])
    },
    {
      location: 'Singapore',
      isRed: false,
      received: new Date(2020, 11, 16).toLocaleDateString(),
      description: 'No campaigns live on in Singapore: Bid requests more than 300M daily and no buying happening',
      flag: 'assets/singapore.png',
      showTable: true,
      table: new MatTableDataSource<PeriodicElement>([{
        name: 'NA',
        cmpStart: 'NA',
        cmpType: 'NA',
        advName: 'NA',
        geo: 'NA',
        adSize: 'NA',
        os: 'NA',
        demand: 'NA',
        traffic: 'NA'

      }])
    },

    {
      location: 'Malaysia',
      isRed: true,
      received: new Date(2020, 11, 16).toLocaleDateString(),
      description: 'Komli media: We are getting less than 300M bid requests daily for Malaysia',
      flag: 'assets/malaysia.png',
      showTable: true,
      table: new MatTableDataSource<PeriodicElement>([{
        name: 'komli main',
        cmpStart: new Date(2020, 11, 17).toLocaleDateString(),
        cmpType: 'UA',
        advName: 'komli adv',
        geo: 'Malaysia',
        adSize: '320x480',
        os: 'iOS',
        demand: 'high',
        traffic: '430 million per day'

      }])
    },
    {
      location: 'canada',
      isRed: true,
      received: new Date(2020, 11, 16).toLocaleDateString(),
      description: 'swiggy_rt_main: We are getting less than 300M bid requests daily for canada',
      flag: 'assets/canada.png',
      showTable: true,
      table: new MatTableDataSource<PeriodicElement>([{
        name: 'swiggy app',
        cmpStart: new Date(2020, 11, 17).toLocaleDateString(),
        cmpType: 'RT',
        advName: 'swiggy',
        geo: 'Canada',
        adSize: '320x480',
        os: 'iOS',
        demand: 'high',
        traffic: '410 million per day'

      }])
    },
    {
      location: 'Nepal',
      isRed: false,
      received: new Date(2020, 11, 16).toLocaleDateString(),
      description: 'No campaigns live on in Nepal: Bid requests more than 300M daily and no buying happening',
      flag: 'assets/nepal.png',
      showTable: true,
      table: new MatTableDataSource<PeriodicElement>([{
        name: 'NA',
        cmpStart: 'NA',
        cmpType: 'NA',
        advName: 'NA',
        geo: 'NA',
        adSize: 'NA',
        os: 'NA',
        demand: 'NA',
        traffic: 'NA'

      }])
    }
    // {
    //   location: 'Singapore',
    //   received: new Date(2020, 11, 17).toLocaleDateString(),
    //   description: 'the QPS for Singapore has been closed automatically owing to no campaign targetted in this region',
    //   flag: 'assets/singapore.png'
    // },
    // {
    //   location: 'Malaysia',
    //   received: new Date(2020, 11, 18).toLocaleDateString(),
    //   description: 'There is a campaign (id:5610) targeting Malaysia , however the QPS for this region is not enabled',
    //   flag: 'assets/malaysia.png'
    // },
    // {
    //   location: 'Canada',
    //   received: new Date(2020, 11, 19).toLocaleDateString(),
    //   description: 'the QPS for Canada has been closed automatically owing to no campaign targetted in this region',
    //   flag: 'assets/canada.png'
    // },
    // {
    //   location: 'Nepal',
    //   received: new Date(2020, 11, 20).toLocaleDateString(),
    //   description: 'There is a campaign (id:1310) targeting Nepal , however the QPS for this region is not enabled',
    //   flag: 'assets/nepal.png'
    // },
    // {
    //   location: 'UAE',
    //   received: new Date(2020, 11, 21).toLocaleDateString(),
    //   description: 'the QPS for UAE has been closed automatically owing to no campaign targetted in this region',
    //   flag: 'assets/uae.png'
    // }
  ]

  constructor() { }

  ngOnInit() {
  }

}
