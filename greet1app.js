//example 1
var greet1 = require('./greet1');
greet1();
//example 1
//var greet2 = require('./greet2');
//greet2.greet();
//or
var greet2 = require('./greet2').greet;
greet2();
//example 3
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'changed hello world';
var greet3b = require('./greet3');
//require caches the results/objects. models runce at once.
greet3b.greet();
//example 4
var GreetC = require('./greet4');
var greet4 = new GreetC();
greet4.greet();
greet4.greeting = 'changed hello world 2';
var GreetCb = require('./greet4');
var greet4b = new GreetCb();
greet4b.greet();
//example 5
//var greet5 = require('./greet5');
//greet5.greet();
//to project greet
var greet5 = require('./greet5').greet;
greet5();
