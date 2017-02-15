// var fs = require("fs")


// fs.readFile('history.json', 'utf8', function (err, data) {
// 	   if (err) {
// 	      console.log('there is an error');
// 	   }
// 	   var obj = JSON.parse(data);
// 	   for(var i in data){$('#myDiv').append(obj.services[0].name)}
	   
// 	});



$.getJSON('data/history.json', function(data){
	
        $('#myDiv').append(data.services[0].message);
        $('#myDiv2').append(data.services[1].message);
        console.log(data.services[0].values.length-1)
        console.log(data.services[1].values.length-1)

    
});


