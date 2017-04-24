var moviesJSON = require('../movies.json')

//home
exports.home = function(req, res){
	res.render('home', {
		title: 'Star Wars Movies',
		movies: moviesJSON.movies
	});
};

//movie single
exports.movies_single = function(req, res){
	var episode_number = req.params.episode_number;
	res.send("You are watching episode" + episode_number);
};

//not found
exports.not_found = function(req, res){
	res.send("Page not available");
};