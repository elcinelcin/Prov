//basic
//no need to add .js extension. It's default
//require is a function taking a string as input
require('./greet');
//with function
require('./greet_function.js');
//export a function
var greet = require('./greet_export.js');
greet();
