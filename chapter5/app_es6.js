'use strict';
// a = 2; => var a = 2;
class Person  {
  constructor(firstname,lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
  }

}
  var john = new Person('John','Doe');
  john.greet();
  var jane = new Person('Jans', 'Doe');
  jane.greet();



console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
