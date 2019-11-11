import { Injectable } from '@angular/core';
import { AppConst } from '../constants/AppConst';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
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
  }


}
