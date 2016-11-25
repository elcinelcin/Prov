//function statement
function greet() {
  console.log('Hi');
}
greet();
//functions are first-class
function logGreeting(fn){
  fn();
}
logGreeting(greet);
//functions expression
var greetMe = function() {
  console.log('Hi v');
}
greetMe();
//it's still first-class
logGreeting(greetMe);
//function expression on the fly
logGreeting(function() {
  console.log('Hi vk');
})
