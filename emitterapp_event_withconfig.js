var Emitter = require('events');
var emtr = new Emitter();
var eventConfig = require('./config').events;
emtr.on(eventConfig.GREET, function(){
  console.log('Hello 1');
});
emtr.on(eventConfig.GREET, function(){
  console.log('Hello 2');
});
console.log('hello');
emtr.emit(eventConfig.GREET);
