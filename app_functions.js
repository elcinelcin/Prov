//function constructor
function Person (firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}
//attach a function
Person.prototype.greet = function(){
  console.log('Hello, '+ this.firstname + ' ' + this.lastname);
}
var volkan = new Person('Volkan','Kumbasar');
console.log(volkan.firstname);
volkan.greet();
var zuleyha = new Person('Zuleyha','Yildiz Kumbasar');
zuleyha.greet();
console.log(volkan.__proto__);
console.log(zuleyha.__proto__);
console.log(zuleyha.__proto__ == volkan.__proto__);  
