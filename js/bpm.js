Highcharts.chart('bpm', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Beats per Minute (bpm)'
    },
    subtitle: {
        text: 'Average bpm sampled throughout the set'
    },
    xAxis: {
        type: 'linear',
        title: {
            text: 'Time (Minutes)'
        },
        allowDecimals: false
    },
    yAxis: {
        title: {
            text: 'bpm'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:.f} (min): {point.y:.2f} (bpm)'
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        },
        series: {
            color: '#EB9532'
        }
    },

    series: [{
        name: 'BPM',
        // Define the data points. All series have a dummy year
        // of 1970/71 in order to be compared on the same x axis. Note
        // that in JavaScript, months start at 0 for January, 1 for February etc.
        data: [
            [0, 99],
            [1, 141],
            [2, 161],
            [3, 129],
            [4, 124],
            [5, 135],
            [6, 150],
            [7, 122],
            [8, 129],
            [9, 133],
            [10, 132],
            [11, 150],
            [12, 153],
            [13, 150],
            [14, 128],
            [15, 126],
            [16, 128],
            [17, 130],
            [18, 83],
            [19, 129],
            [20, 90],
            [21, 100],
            [22, 100],
            [23, 100],
            [24, 100],
            [25, 133],
            [26, 138],
            [27, 130],
            [28, 127],
            [29, 148],
            [30, 150],
            [31, 148],
            [32, 150],
            [33, 148],
            [34, 152],
            [35, 150],
            [36, 65],
            [37, 132],
            [38, 70],
            [39, 126],
            [40, 128],
            [41, 0],
            [42, 140],
            [43, 152],
            [44, 126],
            [45, 128],
            [46, 65],
            [47, 128],
            [48, 140],
            [49, 152],
            [50, 128],
            [51, 152],
            [52, 80],
            [53, 82],
            [54, 126],
            [55, 154],
            [56, 160],
            [57, 84],
        ]
    }]
});