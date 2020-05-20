var mongoose = require('mongoose');

var Schema = mongoose.Schema;

  var blogSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String,
    
  });

  var theModel = mongoose.model('Employee', blogSchema );
  var thhhe = new theModel(
      {name:'ram',
  emailid:'dalli.ramu@gmail.com',});

  console.log(thhhe);

    

