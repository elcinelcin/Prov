var Emitter = require('events');
var emtr = new Emitter();
emtr.on('greet', function(){
  console.log('Hello 1');
});
emtr.on('greet', function(){
  console.log('Hello 2');
});
console.log('hello');
emtr.emit('greet');
