var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the database

// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "grouchy"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong.");
//     }
//     else
//     {
//         console.log("We just saved a cat.");
//         console.log(cat);
//     }
// });

//retreive all cats from the database and console.log

// Cat.create({
//     name: "Snow White",
//     age: 15,
//     temperament: "bland"
// });

Cat.find({},function(err, cats){
    if(err){
        console.log("OH NO!, error.")
        console.log(err);
    }
    else
    {
        console.log("All the cats!");
        console.log(cats);
    }
})

