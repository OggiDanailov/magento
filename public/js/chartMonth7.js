function sum(array) { return (array.reduce(function(a,b){return a + b},0))/24 } //gets the average number of each day


$.getJSON('data/history.json', function(dataJSON){
	var array1 = dataJSON.services[0].values //the pure values of Dashboard 
	var array2 = dataJSON.services[1].values //pure values of API
  // console.log(array1)
	var results = [];
      while (array1.length-1) {
        results.push(array1.splice(0, 24)); //new array results has now 30 subarrays
      }
      var sums = []
      var temp = results.length -1     //I run a loop from the end to get the last seven days
      for(i=temp; i>temp -7; i--) {
        sums.push(results[i])         
      }
      finalWeek = sums.reverse();       //need to reverse the new array in order to get the data in the correct chronoligcal order
      // console.log(finalWeek)

      result = finalWeek.map(function(week) {
            return sum(week)
       })

    var results2 = [];
      while (array2.length-1) {
        results2.push(array2.splice(0, 24)); 
      }
      var sums2 = []
      var temp2 = results2.length -1
      for(i=temp2; i>temp2 -7; i--) {
        sums2.push(results2[i])
      }
      finalWeek2 = sums2.reverse();
      // console.log(finalWeek)

      result2 = finalWeek2.map(function(week) {
            return sum(week)
       })


	Highcharts.chart('container3', {

    title: {
        text: 'Daily status data over the last 7 days'
    },

    subtitle: {
        text: 'Average daily usage based on daily averages'
    },

    yAxis: {
        title: {
            text: 'VALUES'
        }
    },
    // legend: {
    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'middle'
    // },

    plotOptions: {
        series: {
            pointStart: 1
        }
    },

    series: [{
        name: dataJSON.services[0].name,
        data: result = finalWeek.map(function(week) {
                return sum(week)
                })
    },

    	{
        name: dataJSON.services[1].name,
        data: result2 = sums2.map(function(month) {
            return sum(month)
       })
    }

    ]

});




});