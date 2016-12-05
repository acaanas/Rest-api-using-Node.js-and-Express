var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

var dish = require('./dishRouter');
var promo = require('./promoRouter');
var leader = require('./leaderRouter');

app.use(morgan('dev'));

app.use('/dishes',dish.dishRouter);
app.use('/promos',promo.promoRouter);
app.use('/leaders',leader.leaderRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});