import { Injectable } from '@angular/core';
import { AppConst } from '../constants/AppConst';
import { Observable, of } from 'rxjs';
import { ListOfCampaigns, ChartObject, ChartData } from '../models';
import { Mocks } from '../mocks';
import { HighChartCustom } from '../highChartCustom';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }



  getChartOptions() {

    let chartOptions = {
      chart: {
        type: 'column'
      },
      credits: {
        enabled: false
      },

      title: {
        text: 'Existing Campaign Supply Performance'
      },
      xAxis: {
        categories: ['supply-1', 'supply-2', 'supply-3', 'supply-4', 'supply-5', 'supply-6', 'supply-1', 'supply-2', 'supply-3', 'supply-4', 'supply-5', 'supply-6']
      },
      yAxis: {
        title: {
          enabled: false,
          text: 'y-label text'
        }
      },
      plotOptions: {},
      series: [{
        states: { hover: { enabled: false } },
        showInLegend: false,
        name: 'Series',
        data: [
          { y: 95, color: AppConst.GREEN.C9 },
          { y: 45, color: AppConst.RED.C1 },
          { y: 17, color: AppConst.RED.C7 },
          { y: 66, color: AppConst.GREEN.C3 },
          { y: 29.9, color: 'red' },
          { y: 29.9, color: AppConst.GREEN.C7 },
          { y: 29.9, color: AppConst.GREEN.C3 },
          { y: 29.9, color: 'red' },
          { y: 29.9, color: 'red' },
          { y: 29.9, color: 'red' },
          { y: 29.9, color: 'red' },
          { y: 29.9, color: 'red' }]
      }]
    };


    return chartOptions;

  }



  getChartOptions2() {

    let chartOptions = {
      chart: {
        type: 'column'
      },
      credits: {
        enabled: false
      },

      title: {
        text: 'Expected new Campaign Supply Performance'
      },
      xAxis: {
        categories: ['supply-1', 'supply-2', 'supply-3', 'supply-4', 'supply-5', 'supply-6', 'supply-1', 'supply-2', 'supply-3', 'supply-4', 'supply-5', 'supply-6']
      },
      yAxis: {
        title: {
          enabled: false,
          text: 'y-label text'
        }
      },
      plotOptions: {},
      series: [{
        states: { hover: { enabled: false } },
        showInLegend: false,
        name: 'Series',
        data: [
          { y: 95, color: AppConst.GREEN.C9 },
          { y: 45, color: AppConst.RED.C1 },
          { y: 17, color: AppConst.RED.C7 },
          { y: 66, color: AppConst.GREEN.C3 },
          { y: 29.9, color: 'red' },
          { y: 29.9, color: AppConst.GREEN.C7 },
          { y: 29.9, color: AppConst.GREEN.C3 },
          { y: 29.9, color: 'red' },
          { y: 29.9, color: 'red' },
          { y: 29.9, color: 'red' },
          { y: 29.9, color: 'red' },
          { y: 29.9, color: 'red' }]
      }]
    };


    return chartOptions;

  }



  //add null checkcks
  formatChartApiResp(apiData: ChartObject[], useKey: string, hideX?: boolean) {

    // console.log(useKey);
    let return_obj = new HighChartCustom();

    let x = apiData.map(x => x.name);
    let derivedData = this.deriveDataForChartOptions(apiData, useKey);

    let series = [{
      states: { hover: { enabled: false } },
      showInLegend: (hideX == true) ? false : true,
      name: 'SSP',
      data: derivedData
    }];


    return_obj.set_x_axix_labels(x);
    return_obj.set_series(series);
    return return_obj;
  }


  deriveDataForChartOptions(apiData: ChartObject[], useKey: string): any[] {

    let values: any[] = apiData.map(x => x[useKey]);
    // values.sort();
    values.sort(function (a, b) { return a > b ? 1 : -1 });



    //null checks
    let median_idx = (values.length > 1) ? Math.ceil(values.length / 2 - 1) : 0;
    let lesser: any[] = values.slice(0, median_idx);
    let median = values[median_idx];
    let greater: any[] = values.slice(median_idx + 1);

    let lesserMap = new Map<number, string>();
    let greaterMap = new Map<number, string>();

    this.setLesserMap(lesserMap, lesser);
    this.setGreaterMap(greaterMap, greater);

    let data = [];

    apiData.forEach(point => {
      let colorVar = '';
      let val = point[useKey];
      if (val < median) {
        colorVar = lesserMap.get(val);
      } else if (val > median) {
        colorVar = greaterMap.get(val);
      } else {
        colorVar = AppConst.GREEN.C0;
      }
      // let colorVar = (point.revenue > median) ? AppConst.GREEN.C5 : AppConst.RED.C5;
      data.push({ y: point[useKey], color: colorVar });
    });

    return data;
  }


  setLesserMap(map: Map<number, string>, arr: any[]) {
    let incrementalVal = 0;

    if (arr.length >= 5) {
      incrementalVal = 1;
    } else if (arr.length == 4) {
      incrementalVal = 2;
    } else if (arr.length == 3) {
      incrementalVal = 4;
    } else if (arr.length <= 2) {
      incrementalVal = 5;
    }

    let i = 1;
    let colorCode = '';
    arr.forEach(x => {
      switch (i) {
        case 0:
          colorCode = AppConst.RED.C9;
          break;

        case 1:
          colorCode = AppConst.RED.C8;
          break;

        case 2:
          colorCode = AppConst.RED.C7;
          break;

        case 3:
          colorCode = AppConst.RED.C6;
          break;

        case 4:
          colorCode = AppConst.RED.C5;
          break;

        case 5:
          colorCode = AppConst.RED.C4;
          break;

        case 6:
          colorCode = AppConst.RED.C3;
          break;

        case 7:
          colorCode = AppConst.RED.C2;
          break;

        case 8:
          colorCode = AppConst.RED.C1;
          break;

        case 9:
          colorCode = AppConst.RED.C0;
          break;

        default:
          colorCode = AppConst.RED.C0;
          break;
      }
      i += incrementalVal;
      map.set(x, colorCode);
    });
  }


  setGreaterMap(map: Map<number, string>, arr: any[]) {
    let incrementalVal = 0;

    if (arr.length >= 5) {
      incrementalVal = 1;
    } else if (arr.length == 4) {
      incrementalVal = 2;
    } else if (arr.length == 3) {
      incrementalVal = 4;
    } else if (arr.length <= 2) {
      incrementalVal = 5;
    }

    let i = 1;
    let colorCode = '';
    arr.forEach(x => {
      switch (i) {
        case 1:
          colorCode = AppConst.GREEN.C1;
          break;

        case 2:
          colorCode = AppConst.GREEN.C2;
          break;

        case 3:
          colorCode = AppConst.GREEN.C2;
          break;

        case 4:
          colorCode = AppConst.GREEN.C4;
          break;

        case 5:
          colorCode = AppConst.GREEN.C5;
          break;

        case 6:
          colorCode = AppConst.GREEN.C6;
          break;

        case 7:
          colorCode = AppConst.GREEN.C7;
          break;

        case 8:
          colorCode = AppConst.GREEN.C8;
          break;

        case 9:
          colorCode = AppConst.GREEN.C9;
          break;

        default:
          colorCode = AppConst.GREEN.C9;
          break;
      }
      i += incrementalVal;
      map.set(x, colorCode);
    });
  }



}
