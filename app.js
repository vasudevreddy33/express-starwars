var express = require('express');
var routes = require('./routes');
var path = require('path');

var app = express();


app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//Routes

//home
app.get('/', routes.home);

//movie_single
app.get("/star_wars/:episode_number?", routes.movies_single);

//404 not found

app.get('*', routes.not_found);

app.listen(process.env.PORT || 3000, function(){
	console.log("Server Started on PORT 3000");
});