var chai = require('chai');
var expect = chai.expect;

var piglatin = require('./piglatin');
var EventEmitter = require('events');


describe('piglatin', function (){
  it('should be a function', function (){
    expect(piglatin.piglatin).to.be.a('function');
  });
  it('should take the first letter of a word', function (){
    expect(piglatin.piglatin).to.have.constructor(piglatin.piglatin);
    expect(piglatin.piglatin).to.be.a('string');
  });
  it('should use the last letters and add "ay" to the first', function (){
    expect(piglatin.piglatin).to.have.length.of.at.least(3);
  });
  it('should have words with a vowel appended to the end of the word', function (){
    expect(piglatin.piglatin);
  });
});
