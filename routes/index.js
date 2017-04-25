var moviesJSON = require('../movies.json')

//home (home.ejs in the views folder)
exports.home = function(req, res){
	res.render('home', {
		title: 'Star Wars Movies',
		movies: moviesJSON.movies
	});
};

//movies_single (looks for movies_single.ejs in the views folder)
exports.movies_single = function(req, res){
	//sets episode number for each epidode link
	var episode_number = req.params.episode_number;

	if(episode_number>=1 && episode_number<=6){
		var current_episode = moviesJSON.movies[episode_number - 1];
	
		//response will render movies single link
		res.render('movies_single', {
		movies: moviesJSON.movies,
		title: current_episode.title,
		poster: current_episode.poster,
		description: current_episode.description,
		main_characters: current_episode.main_characters,
		movie_bg: current_episode.hero_image
	});
	}
	else{
		res.render('not_found', {
			movies: moviesJSON.movies,
			title: "Movie Unavailable"
		});
	}
};

//not found
exports.not_found = function(req, res){
	res.render('not_found', {
			movies: moviesJSON.movies,
			title: "Page Unavailable"
		});
};