function sum(array) { return (array.reduce(function(a,b){return a + b},0))/24 } //gets the average number of each day


$.getJSON('data/history.json', function(dataJSON){
	var array1 = dataJSON.services[0].values //the pure values of Dashboard 
	// console.log(array1)
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

    var array2 = dataJSON.services[1].values
    // console.log(array2)

    var results2 = [];
    while (array2.length-1) {
        results2.push(array2.splice(0, 24)); //new array results has now 30 subarrays;one of each day
      }
    var sums2 = []
      for(i=0; i<results2.length; i++) {
        sums2.push(results2[i])
      }

      result2 = sums2.map(function(month) {
            return sum(month)
       })

      



	Highcharts.chart('container', {

    title: {
        text: 'Status data of Electrical current'
    },

    subtitle: {
        text: 'It gives the average sum of each day'
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

    	{
        name: dataJSON.services[1].name,
        data: result2 = sums2.map(function(month) {
            return sum(month)
       })
    }

    ]

});











});