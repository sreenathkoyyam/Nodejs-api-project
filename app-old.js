var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./model/bookModel');
var app =   express();
var port = process.env.PORT || 4000;
var bookRouter = express.Router();

// body parser for posting the data using postman
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


bookRouter.route('/Books')

//post book details
  .post(function(req,res){
    var book = new Book();

  })

  //get book details
  .get(function(req,res){
//
 Book.find(function(err,books){
      if(err)
      //  console.log(err);
      res.status(500).send(err);
      else
        res.json(books);

 });

    /*
// testing bookapi route with out Db connection
    var responseJson={hello:"This is my API"};
     res.json(responseJson); */

  })
//api route
app.use('/api', bookRouter);
// default route
app.get('/', function(req, res){
  res.send('Welcome to my API');
});
// writting port in console log
app.listen(port,function(){

console.log('Gulp running on port : ' + port);
});
