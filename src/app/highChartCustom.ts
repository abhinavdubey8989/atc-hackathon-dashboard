export class HighChartCustom {

    chart: any = {
        // height: 320,
        spacingLeft: 0,
        zoomType: "xy",
        type: 'column'
    }

    credits: any = {
        enabled: false
    }

    legend: any = {
        layout: 'vertical',
        align: 'left',
        x: 220,
        verticalAlign: 'top',
        y: 0,
        floating: true,
        backgroundColor: 'rgba(255,255,255,0.25)'
    }

    title: any = {
        text: ""
    }

    subtitle: any = {
        text: ""
    }

    tooltip: any = {
        shared: false,
        useHTML: true,
        headerFormat: "<b style='font-size:10px'>{point.key}</b>",
        pointFormat: " {point.tooltipData}",
        style: {
            zIndex: 10000000
        }
    }

    xAxis: any[] = [{
        categories: [] = [], //fill this
        index: 0,
        isX: true
    }]

    yAxis: any[] //fill this
    series: any[] //fill this


    constructor() {
    }



    set_series(series_data: any[]) {
        this.series = series_data;
    }

    set_y_axis_labels(y_labels: any[]) {
        this.yAxis = y_labels;
    }

    set_x_axix_labels(x_labels: any[]) {
        this.xAxis[0].categories = x_labels
    }

}
