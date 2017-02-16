function sum(array) { return (array.reduce(function(a,b){return a + b},0))/24 }

$.getJSON('data/history.json', function(dataJSON){
        var array1 = dataJSON.services[0].values
        var array2 = dataJSON.services[1].values
        // console.log(array1)

    // console.log(array1)
        var results = [];
        while (array1.length-1) {
        results.push(array1.splice(0, 24)); //new array results has now 30 subarrays
      }
      // console.log(results.length)
      // console.log(results[29])
      

      var sums = []
      var temp = results.length -1
      for(i=temp; i>temp -7; i--) {
        sums.push(results[i])
      }
      finalWeek = sums.reverse();
      // console.log(finalWeek)

      result = finalWeek.map(function(week) {
            return sum(week)
       })
      
      //here we start the second array



Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Values for the last 7 days'
    },
    xAxis: {
        categories: ['day 1', 'day 2', 'day 3', 'day 4', 'day 5', 'day 6', 'day 7']
    },
     yAxis: {
        title: {
            text: 'Values'
        }
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 3,
                lineColor: '#666666',
                lineWidth: 11
            }
        }
    },
    series: [{

        name: dataJSON.services[0].name,
        marker: {
            symbol: 'square'
        },
        data: result = finalWeek.map(function(week) {
                return sum(week)
                })

    }, {
        name: dataJSON.services[1].name,
        marker: {
            symbol: 'diamond'
        },
        data: [1,6,5,4,3,2,1]
    }]
});









});
