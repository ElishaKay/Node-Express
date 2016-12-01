var express = require('express');

var app = express();
app.listen(8000);

app.get('/anotherRoute', function(request, response){
  response.send("Hey, I'm another route!");
});

app.get('/me', function(request, response){
  response.send({ name: 'John', favoritefood: 'chocolate', bdayWish: 'disneyland' });
});

app.get('/names/:name', function(request, response){
  response.send("Your last name is " + request.params[name]);
});

app.get('/person/:name/:lname', function(request, response){
  response.send("Hello " + request.params.name + " " + request.params.lname);
});

app.set('view engine', 'ejs');

app.get('/', function(request, response){
  response.render('index');
});