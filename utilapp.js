//util is core/native module
var util = require('util');
var name = 'volkan';
var greeting = util.format ('Hello, %s', name);
//print with date&time
util.log(greeting);
//Output:
//27 Nov 23:37:26 - Hello, volkan
