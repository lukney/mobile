var http = require("http");
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');



var connection = mysql.createConnection({
  host     : 'sangeetha.cgcpmi6mcuyv.us-east-2.rds.amazonaws.com',
  user     : 'sangeetha',
  password : '12345678',
  port     : '3306',
database : 'sangeetha'
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

 else{ console.log('Connected to database.');
connection.query("SELECT * FROM karnataka", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
}
);
}
});

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
var server = app.listen(3001,   function () {

  var host = 'ec2-18-221-18-150.us-east-2.compute.amazonaws.com'
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

//rest api to get all customers
app.get('/customer', function (req, res) {
   connection.query('select * from karnataka', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

