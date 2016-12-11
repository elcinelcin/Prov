var util = require('util');

function Police() {
  this.firstname = 'John';
  this.lastname = 'Doe';
}
Police.prototype.greet = function() {
  console.log(`Hello ${this.firstname} ${this.lastname}`);
}
function PolicaMan() {
  Police.call(this);
  this.badgenumber = '1234';
}
util.inherits(PolicaMan,Police);
var officer = new PolicaMan();
officer.greet();
