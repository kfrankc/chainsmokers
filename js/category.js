
$(document).ready(function () {

    // Build the chart
    Highcharts.chart('category', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Chainsmokers Ultra Music Festival 2016 Set Categories'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Percentage',
            colorByPoint: true,
            data: [
            {
                name: 'Chainsmokers Original Songs',
                y: 15.00,
                sliced: true,
                selected: true
            }, {
                name: 'Chainsmokers Songs Remixed by Other Artists',
                y: 10.00
            }, {
                name: 'Other Songs Remixed by Chainsmokers',
                y: 3.33
            }, {
                name: 'A Capella (Remixed)',
                y: 10.00
            }, {
                name: 'Pop (Remixed)',
                y: 10.00
            }, {
                name: 'Pop (Not Remixed)',
                y: 6.67
            }, {
                name: 'Other Remixes',
                y: 18.33
            }, {
                name: 'Dubstep/Brostep',
                y: 23.33
            }, {
                name: 'Electro House',
                y: 3.33
            }]
        }]
    });
});