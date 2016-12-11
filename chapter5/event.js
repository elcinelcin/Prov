'use strict';
var EventEmitter = require('events');
module.exports = class Greetr extends EventEmitter{
  constructor(){
    super(); //to call EventEmitter's constructor;
    this.greeting = 'Hello Greet!';
  }
  greet(data) {
    console.log(`${this.greeting} ${data}`);
    this.emit('greet',data);
  }
}
