const express = require('express');
const exphbs  = require('express-handlebars');
const { Pool } = require('pg');
const avocados = require('./avo-shopper')
const app = express();
const PORT =  process.env.PORT || 3019;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

let counter = 0;
let avos = avocados(Pool)

app.get('/', function(req, res) {
	res.render('index', {
		counter
	});
});

app.get('/add',async function(req, res){
    res.render('add', {
  })
})

app.post('/add/shopAdd', function(req,res){
  res.redirect('shopAdd')
})
// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`AvoApp started on port ${PORT}`)
});