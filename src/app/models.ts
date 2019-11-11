export interface BaseModel {
    id: number,
    name: string

}

export interface ListOfCampaigns {
    data: Array<BaseModel>;
}



export interface ChartObject {
    cost: number,
    id: number,
    margin: number,
    name: string,
    profit: number,
    revenue: number,
    orevenue: number,
    tcost: number,
    mcost: number
}


export interface ChartData {
    data: Array<ChartObject>;
}