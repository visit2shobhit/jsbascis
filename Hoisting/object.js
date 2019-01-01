// Java Script is a protoypte language
// Each Object has prototype properties which make inheritance possible in javascript
// Prototype properties of an object is a place where we  put object and methods that needs to inherited from other object

// Creating Object with the name of function constructor

//Function Contructor

var Person = function(name,job,yearofbirth){
    this.name = name;
    this.job = job;
    this.yearofbirth = yearofbirth;
}

var shobhit = new Person('Shobhit','SSE','1987');
// console.log(shobhit);