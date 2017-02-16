

$.getJSON('data/history.json', function(dataJSON){

Highcharts.chart('container1', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Hourly status data over the past 30 days'
    },
    xAxis: {
        categories: ['hours']
    },
    yAxis: {
        title: {
            text: 'VALUES'
        }
    },
    
    series: [{
        name: dataJSON.services[0].name,
        data: dataJSON.services[0].values
    }, {
        name: dataJSON.services[1].name,
        data: dataJSON.services[1].values
        }]
});

});

