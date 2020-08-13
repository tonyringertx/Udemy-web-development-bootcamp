var express = require("express");
var app = express();


//route
app.get("/", function(req, res){
    res.render("home.ejs");
});

//This is the sytax used in the tutorial but works with an integrated online server
//app.listen(process.env.PORT, process.env.IP, funtion(){
//    console.log("The server is running.");
//});

//listener
var port = process.env.PORT || 5500;
app.listen(port, function () {
    console.log("Server Has Started!");
});