function sum(array) { return (array.reduce(function(a,b){return a + b},0))/24 }

$.getJSON('data/history.json', function(dataJSON){
	var array1 = dataJSON.services[0].values //the pure values of Dashboard 
	var results = [];
      while (array1.length-1) {
        results.push(array1.splice(0, 24)); //new array results has now 30 subarrays
      }
      var sums = []
      for(i=0; i<results.length; i++) {
        sums.push(results[i])
      }

      result = sums.map(function(month) {
            return sum(month)
       })

      



	Highcharts.chart('container', {

    title: {
        text: 'Status data of Electrical current'
    },

    yAxis: {
        title: {
            text: 'Value of ELectrical signal'
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
        data: result = sums.map(function(month) {
            return sum(month)
       })
    },

    ]

});











});