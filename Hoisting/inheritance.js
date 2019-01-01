var Person = function(name,job,yearofbirth){
    this.name = name;
    this.job = job;
    this.yearofbirth = yearofbirth;
}

// This is how inheritance works using prototype properties;
// Attaching Method to the constructor functions using inheritance
Person.prototype.calculateAge = function() {
    console.log(2018-this.yearofbirth);
}

// Attaching Properties to the constructor functions using inheritance
Person.prototype.lastname = 'Srivastav';
var shobhit = new Person('Shobhit','SSE','1987');
var tom = new Person('Tom','Designer','1990');
shobhit.calculateAge();
tom.calculateAge();
// console.log(shobhit.lastname);  // See the properties are coming or not
// console.log(Person);