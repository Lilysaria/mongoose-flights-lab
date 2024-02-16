// import our model so we can talk to the database and perfomr
// our CRUD operations
const FlightModel = require('../models/flight')

module.exports = {
	new: newFlight,
	create: create
	// or 
	// create
}


async function create(req, res){
	console.log(req.body, " <- is the contents of our form!")
	req.body.nowShowing = !!req.body.nowShowing // !! forces the value to a boolean
	  // remove any whitespace at start and end of cast
	req.body.cast = req.body.cast.trim();
	  // split cast into an array if it's not an empty string - using a regular expression as a separator
	if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);

	try {
		const createdFlightDoc = await FlightModel.create(req.body)
		// for now redirect to new page
		res.redirect('/flights/new')
	} catch(err){
		console.log(err)
		res.redirect('/flights/new')
	}
}

function newFlight(req, res){

	// res.render looks in our 
	// views folder for the ejs page
	res.render('flights/new')
}