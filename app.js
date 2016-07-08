var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.use(bodyParser.json());
app.get("/", function(req, res){
		res.send("Welcome to my world");
});





app.listen(3001, function(){
	console.log("App Listening on 3001");
})