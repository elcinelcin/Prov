//expression
(function () {
  //variable is projected
  var firstname = 'John'
  console.log(firstname);
}());
//same variable here
var firstname = 'Jane';
//
console.log(firstname);
(function (lastname) {
  //variable is projected
  var firstname = 'John'
  console.log(firstname);
  console.log(lastname);
}('Doe'));
