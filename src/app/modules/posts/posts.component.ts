import { Component, OnInit } from '@angular/core';
import { AppConst } from '../../constants/AppConst'
import * as Highcharts from 'node_modules/highcharts/highcharts';
import { ChartService } from 'src/app/services/chart.service';
import { BaseModel } from 'src/app/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  Geo = [
    { id: 1, name: 'India' },
    { id: 1, name: 'USA' },
    { id: 1, name: 'UK' },
    { id: 1, name: 'indonesia' },
  ];


  oldCampaignId: number;
  newCampaignId: number;

  oldCampaigns: BaseModel[] = [];
  newCampaigns: BaseModel[] = [];




  constructor(
    private chartService: ChartService,
    private apiService: ApiService

  ) { }

  ngOnInit() {

    this.getCampaigns(false);
    this.getCampaigns(true);


    let highChartData: any = this.chartService.getChartOptions();

    let highChartData2: any = this.chartService.getChartOptions2();

    Highcharts.chart('chart-container', highChartData);
    Highcharts.chart('chart-container-2', highChartData2);
  }





  //add null checks
  getCampaigns(isNew: boolean) {
    this.apiService.getListOfCampaigns(isNew).subscribe(resp => {
      if (isNew) {
        this.newCampaigns = resp.data;
        this.newCampaignId = resp.data[0].id;
        this.getChartData(this.newCampaignId, 1);
      } else {
        this.oldCampaigns = resp.data;
        this.oldCampaignId = resp.data[1].id;
        this.getChartData(this.oldCampaignId, 0);
      }
    });
  }


  getChartData(id: number, chartId: number) {

    this.apiService.getChartDataForCampaign(id).subscribe(resp => {
      if (chartId == 0) {
        let highChartData0: any = this.chartService.formatChartApiResp(resp.data, 'revenue', true);
        Highcharts.chart('chart-container-0', highChartData0);
      } else if (chartId == 1) {
        let highChartData1: any = this.chartService.formatChartApiResp(resp.data, 'revenue', true);
        Highcharts.chart('chart-container-1', highChartData1);
      }

    });

    console.log('fetch chart data for : ', id);
  }

}
