var express = require('express')

var path = require('path')
var app = express()

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/charts',function(req,res){
  res.sendFile(path.join(__dirname+'/views/charts.html'));
  //__dirname : It will resolve to your project folder.
});


app.use(express.static(__dirname + '/public'));





app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


