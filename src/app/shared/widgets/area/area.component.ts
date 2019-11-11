import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { ChartService } from 'src/app/services/chart.service';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit, OnChanges {

  chartOptions: {};
  @Input() data: any = [];
  @Input() chartTitle: string;
  @Input() useKey: string;


  Highcharts = Highcharts;

  constructor(
    private chartService: ChartService
  ) { }

  ngOnInit() {
    this.getSSPApiData();
  }


  ngOnChanges() {
    this.getSSPApiData();
  }


  getSSPApiData() {
    let options: any = this.chartService.formatChartApiResp(this.data, this.useKey);

    this.chartOptions = {
      chart: {
        type: 'column'
      },

      yAxis: {
        title: {
          enabled: true,
          text: 'amount in USD ($)'
        }
      },
      xAxis: options.xAxis,

      title: {
        text: this.chartTitle
      },

      tooltip: {
        split: true,
        valuePrefix: '$'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: options.series
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
