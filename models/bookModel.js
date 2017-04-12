//referance to mongoose
var mongoose = require('mongoose');
//referance to mongoose schema
    Schema = mongoose.Schema;

// create table schema
var bookModel = new Schema({

          title: {
            type:String
          },
          author : {
            type:String
          },
          genre: {
            type:String
          },
          read: {
            type:Boolean , default:false
          }

});
// load the schema in to Book
module.exports = mongoose.model('Book',bookModel);
