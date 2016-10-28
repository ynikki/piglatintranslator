module.exports = {piglatin: piglatin};

var EventEmitter = require('events');
var util = require('util');

function piglatin(word) {
  EventEmitter.call(this);

  var emptyArr = " ";
  var addAy = "ay";
  var vowels = ["a", "e", "i", "o", "u"];

  for(var i=0; i<word.length; i++){
  if(word.substring(i, i + addAy) === word){

    }    
  }
}