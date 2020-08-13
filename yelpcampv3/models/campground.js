var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

//campground schema must be complied down into a model
var Campground = mongoose.model("Campground", campgroundSchema);

module.exports = mongoose.model("Campground", campgroundSchema);