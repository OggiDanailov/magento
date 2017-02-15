function sum(array) { return array.reduce(function(a,b){return a + b},0) }

$.getJSON('data/history.json', function(dataJSON){
  var array1 = dataJSON.services[0].values
  
        
      var results = [];

      while (array1.length-1) {
        results.push(array1.splice(0, 24));
      }

      console.log(results.length)

      var sums = []

      for(i=0; i<results.length; i++) {
        sums.push(results[i])
      }

       console.log(sums)

       result = sums.map(function(month) {
            return sum(month)
       })

      console.log(result[24])


  //     }

});
    
    
     
   

        

// Highcharts.chart('container', {
//     chart: {
//         type: 'line'
//     },
//     title: {
//         text: 'Historical status data in the last 30 days'
//     },
//     xAxis: {
//         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//     },
//     yAxis: {
//         title: {
//             text: 'VALUES'
//         }
//     },
    
//     series: [{
//         name: dataJSON.services[0].name,
//         data: dataJSON.services[0].values
//     }, {
//         name: dataJSON.services[1].name,
//         data: dataJSON.services[1].values
//         }]
// });

// });

// $.getJSON('data/history.json', function(dataJSON){
//     var myData = new Array(dataJSON.services[0].values);
//     var myChart = new JSChart('chartid', 'line');
//     myChart.setDataArray(myData);
//     myChart.setLineColor('#8D9386');
//     myChart.setLineWidth(4);
//     myChart.setTitleColor('#7D7D7D');
//     myChart.setAxisColor('#9F0505');
//     myChart.setGridColor('#a4a4a4');
//     myChart.setAxisValuesColor('#333639');
//     myChart.setAxisNameColor('#333639');
//     myChart.setTextPaddingLeft(0);
//     myChart.draw();


// });