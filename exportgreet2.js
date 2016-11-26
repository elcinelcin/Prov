exports.greet = function() {
	console.log('Hello');
}
console.log(exports);
console.log(module.exports);
//pointed to the same object. We only changed the object
