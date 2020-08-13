//requirements
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//tell express to use body parser
app.use(bodyParser.urlencoded({extended: true}));

//allows to leave off .ejs
app.set("view engine", ".ejs");

//variable for the array which will be moved to the server
var campgrounds = [
    {name: "Salmon Creek", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Timber Camp", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Big Bear Bend", image: "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Mountain Goat Rest", image: "https://images.pexels.com/photos/939723/pexels-photo-939723.jpeg?auto=compress&cs=tinysrgb&h=350"}
];

//landing page
app.get("/", function(req, res){
    res.render("landing");
});

//campgrounds page
app.get("/campgrounds", function(req, res){
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

//Post route using rest convention
app.post("/campgrounds", function(req, res){
    //res.send("you hit the post route");
    //get data from campground form and add campground array
    var name = req.body.name;
    var image =  req.body.image;
    //need to make a new object in order to push data into the array
    //name: name is a convention where first name can be anything but is usually the same word for key pair
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

//restful convention for form that will submit to the post route
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

//listener
var port = process.env.PORT || 5500;
app.listen(port, function () {
    console.log("YelpCamp Server Has Started!");
});

