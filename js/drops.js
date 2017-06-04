Highcharts.chart('drops', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Drop Intensity'
    },
    subtitle: {
        text: 'Drops categorized by low, medium, or high'
    },
    xAxis: {
        type: 'linear',
        title: {
            text: 'Time (Minutes)'
        },
        allowDecimals: false
    },
    yAxis: {
        min: 0,
        categories: ['No Drops', 'Low', 'Medium', 'High'],
        title: {
            text: 'Drop Level'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
        },
        series: {
            color: '#F1C40F'
        }
    },
    series: [{
        name: 'Drop Intensity',
        data: [
            {x: 0.46, y: 3, color: '#E74C3C'}, 
            {x: 1.25, y: 3, color: '#E74C3C'}, 
            {x: 2.20, y: 2, color: '#E67E22'}, 
            {x: 4.13, y: 2, color: '#E67E22'},
            {x: 5.14, y: 3, color: '#E74C3C'},
            {x: 6.28, y: 3, color: '#E74C3C'},
            [8.06, 1], 
            {x: 9.22, y: 2, color: '#E67E22'},
            {x: 10.21, y: 2, color: '#E67E22'},
            {x: 12.20, y: 2, color: '#E67E22'},
            {x: 13, y: 2, color: '#E67E22'},
            {x: 15.01, y: 2, color: '#E67E22'},
            {x: 16.02, y: 3, color: '#E74C3C'},
            {x: 17.31, y: 2, color: '#E67E22'},
            {x: 19.33, y: 3, color: '#E74C3C'},
            [21.43, 1],
            {x: 23.28, y: 3, color: '#E74C3C'},
            [24.43, 1],
            [26.16, 1], 
            [27.50, 1],
            [28.48, 1], 
            {x: 29.53, y: 2, color: '#E67E22'},
            {x: 30.43, y: 2, color: '#E67E22'},
            {x: 32.00, y: 2, color: '#E67E22'},
            [33.29, 1],
            {x: 35.17, y: 3, color: '#E74C3C'},
            {x: 36.25, y: 3, color: '#E74C3C'},
            {x: 38.16, y: 3, color: '#E74C3C'},
            {x: 40.38, y: 2, color: '#E67E22'},
            {x: 41.19, y: 2, color: '#E67E22'},
            {x: 42.42, y: 2, color: '#E67E22'},
            {x: 43.45, y: 3, color: '#E74C3C'},
            {x: 45.00, y: 2, color: '#E67E22'},
            {x: 47.30, y: 2, color: '#E67E22'},
            {x: 48.41, y: 2, color: '#E67E22'},
            {x: 50.40, y: 2, color: '#E67E22'},
            {x: 53.45, y: 2, color: '#E67E22'},
            {x: 54.45, y: 3, color: '#E74C3C'},
            {x: 55.33, y: 3, color: '#E74C3C'},
        ]
    }]
});