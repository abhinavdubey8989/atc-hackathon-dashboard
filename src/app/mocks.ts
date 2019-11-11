

import { BaseModel, ListOfCampaigns, ChartObject, ChartData } from './models';

export class Mocks {

    public static CAMPAIGNS: BaseModel[] = [
        { id: 1, name: "campaign-1" },
        { id: 2, name: "campaign-2" },
        { id: 3, name: "campaign-3" },
        { id: 4, name: "campaign-4" },
    ];

    public static CAMPAIGNS_LIST_API_RESP: ListOfCampaigns = {
        data: Mocks.CAMPAIGNS
    }



    public static CHART_DATA: ChartObject[] = [
        { id: 1, name: "Google", cost: 10, margin: 4480, profit: 4180, revenue: 2427, orevenue: 31560, tcost: 300, mcost: 27080 },
        { id: 4, name: "smaato", cost: 40, margin: 500, profit: 550, revenue: 1282, orevenue: 12820, tcost: 100, mcost: 13149 },
        { id: 5, name: "inmobi", cost: 50, margin: 1030, profit: 930, revenue: 1256, orevenue: 11310, tcost: 100, mcost: 10280 },
        { id: 6, name: "Fyber", cost: 60, margin: 1340, profit: 1240, revenue: 1141, orevenue: 10270, tcost: 100, mcost: 8930 },
        { id: 2, name: "Mopub", cost: 20, margin: 2760, profit: 2460, revenue: 3150, orevenue: 25200, tcost: 300, mcost: 22440 },
        { id: 3, name: "Applovin", cost: 30, margin: 2850, profit: 2550, revenue: 1857, orevenue: 16720, tcost: 300, mcost: 13870 },

    ];


    public static CHART_DATA_API_RESP: ChartData = {
        data: Mocks.CHART_DATA
    }



} 