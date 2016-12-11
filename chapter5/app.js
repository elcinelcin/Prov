var EventEmitter = require('events');
var util = require('util');
function Greetr() {
  this.greeting = 'Hello Greet!';
}
util.inherits(Greetr,EventEmitter);
Greetr.prototype.greet = function() {
  console.log(this.greeting);
  this.emit('greet');
}
var greet1 = new Greetr();
greet1.on('greet',function() {
  console.log('Someone greeted.');
});
greet1.greet();
