var person = {
  firstname: 'Volkan',
  lastname: 'Kumbasar',
  greet: function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }
};
person.greet();
console.log(person.firstname);
console.log(person['firstname']);
