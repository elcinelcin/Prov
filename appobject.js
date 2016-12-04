var person = {
  firstname : '',
  lastname : '',
  greet : function() {
    return this.firstname + ' ' + this.lastname;
  }
}
var volkan = Object.create(person);
volkan.firstname = 'volkan';
volkan.lastname = 'kumbasar';
var zuleyha = Object.create(person);
zuleyha.firstname = 'zuleyha';
zuleyha.lastname = 'yildiz kumbasar';
//output
console.log(volkan.greet());
console.log(zuleyha.greet());
