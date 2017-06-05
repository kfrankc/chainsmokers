Highcharts.chart('time', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Time Of Each Mix in Set'
    },
    subtitle: {
        text: 'Duration of each mix with number of drops in the mix'
    },
    xAxis: {
        type: 'linear',
        title: {
            text: 'Mix Number (28 total, indexed from 0 to 27)'
        },
        allowDecimals: false
    },
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} min',
            style: {
                color: '#BD3C4E'
            }
        },
        title: {
            text: 'Duration',
            style: {
                color: '#BD3C4E'
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Number of Drops',
            style: {
                color: '#FFC153'
            }
        },
        labels: {
            format: '{value}',
            style: {
                color: '#FFC153'
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 350,
        verticalAlign: 'top',
        y: 80,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [{
        name: 'Number of Drops',
        type: 'column',
        yAxis: 1,
        data: [2, 1, 3, 2, 1, 2, 0, 1, 2, 1, 3, 1, 2, 2, 0, 0, 1, 2, 1, 1, 2, 3, 1, 1, 1, 1, 0, 3],
        color: '#FFC153',
    }, {
        name: 'Mix Duration',
        type: 'spline',
        data: [1.00, 1.58, 4.08, 2.45, 1.25, 2.09, 1.37, 1.28, 1.35, 2.25, 4.48, 1.28, 2.04, 1.28, 
               0.53, 0.37, 0.54, 1.19, 1.49, 1.27, 4.33, 2.28, 1.18, 2.28, 1.58, 0.38, 1.10, 5.53],
        color: '#BD3C4E',
        tooltip: {
            valueSuffix: ' min'
        }
    }, ]
});