//THE PURPOSE OF THIS FILE
//is to create and export our object Model(which we use in our controllers)
//the model performs cruds operations on the movies collections in our movies database!


const mongoose = require('mongoose')

const Schema = mongoose.Schema;

//the schema enforces the shape of the documents(think of objects)
// in our mongodb movies collection
const flightSchema = new Schema({
  title: String,
  releaseYear: Number,
  mpaaRating: String,
  cast: [String],
  nowShowing: Boolean
}, {
  timestamps: true
});
	
// Compile the schema into a model and export it
// Movies, creates a movies collection in our movies database
module.exports = mongoose.model('Flight', flightSchema);