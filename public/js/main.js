

	$.getJSON('data/history.json', function(data){
	
        $('#dashboard').append(data.services[0].message);
        $('#api').append(data.services[1].message);
        // console.log(data.services[0].values.length-1)
        // console.log(data.services[1].values.length-1)

    
});





