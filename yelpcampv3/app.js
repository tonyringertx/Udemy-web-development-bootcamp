//requirements
var express      = require("express"),
    app          = express(),
    bodyParser   = require("body-parser"),
    mongoose     = require("mongoose");

//create and access the database using mongoose
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true, useUnifiedTopology: true});

//tell express to use body parser
app.use(bodyParser.urlencoded({extended: true}));

//allows to leave off .ejs
app.set("view engine", ".ejs");

// Campground.create(
//     {
//         name: "Salmon Creek",
//         image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350",
//         description: "This is a creek with some salmon in it but there are absolutely no ammenities.  Hard core only."
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("There was a newly created campground: ")
//             console.log(campground);
//         }
//     });


//variable for the array which will be moved to the server
// var campgrounds = [
//     {name: "Salmon Creek", image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350"},
//     {name: "Timber Camp", image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350"},
//     {name: "Big Bear Bend", image: "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&h=350"},
//     {name: "Mountain Goat Rest", image: "https://images.pexels.com/photos/939723/pexels-photo-939723.jpeg?auto=compress&cs=tinysrgb&h=350"}
// ];

//landing page
app.get("/", function(req, res){
    res.render("landing");
});


//Index - show all campgrounds in database
//campgrounds page
app.get("/campgrounds", function(req, res){
    //get all campgrounds from the database
        Campground.find({}, function(err, allCampgrounds){
            if(err){
                console.log("There was an error");
            }else{
                res.render("index", {campgrounds: allCampgrounds});
            }
        });
    // 
});

// Creste -  add new campground
//Post route using rest convention
app.post("/campgrounds", function(req, res){
    //res.send("you hit the post route");
    //get data from campground form and add campground array
    var name = req.body.name;
    var image =  req.body.image;
    var desc =  req.body.description;
    //need to make a new object in order to push data into the array
    //name: name is a convention where first name can be anything but is usually the same word for key pair
    var newCampground = {name: name, image: image, description: desc};
    //campgrounds.push(newCampground);
    //create a new campground and save to the database
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err)
        } else {
            res.redirect("/campgrounds");
        }
    });
    //redirect back to campgrounds page
    //res.redirect("/campgrounds");
});

//New - show form to create new campground
//restful convention for form that will submit to the post route
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

//Show - route that will show more info about one campground
app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    }); 
});

//listener
var port = process.env.PORT || 5500;
app.listen(port, function () {
    console.log("YelpCamp Server Has Started!");
});

