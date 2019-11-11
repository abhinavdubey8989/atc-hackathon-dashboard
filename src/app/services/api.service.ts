import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListOfCampaigns, ChartObject, ChartData } from '../models';
import { Mocks } from '../mocks';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor() { }


  getListOfCampaigns(isNew: boolean): Observable<ListOfCampaigns> {
    return of(Mocks.CAMPAIGNS_LIST_API_RESP);
  }


  getChartDataForCampaign(id: number): Observable<ChartData> {
    return of(Mocks.CHART_DATA_API_RESP);
  }




  getSSPChartData(): Observable<ChartData> {
    return of(Mocks.CHART_DATA_API_RESP);
  }



  getPercent(per: number): Observable<ChartData> {

    let dummyData: ChartObject[] = Mocks.CHART_DATA;
    let arr: ChartObject[] = [];

    dummyData.forEach(x => {
      let obj = {
        id: x.id,
        name: x.name,
        cost: Math.ceil(per * x.cost),
        margin: Math.ceil(per * x.margin),
        profit: Math.ceil(per * x.profit),
        revenue: Math.ceil(per * x.revenue),
        orevenue: Math.ceil(per * x.orevenue),
        tcost: Math.ceil(per * x.tcost),
        mcost: Math.ceil(per * x.mcost)
      }

      arr.push(obj);
    });

    let obj: ChartData = {
      data: arr
    }
    return of(obj);
  }

}
