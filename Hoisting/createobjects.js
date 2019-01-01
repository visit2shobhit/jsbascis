// Create Objects using object.create method
// First define an object that will act as prototype then create an object based on prototype
// Whenever we create the object using new operator it will run constructor code while object.create will not run the constructor code it will run only the constructor code
// Object.create() method creates a new object , using an existing object of the prototype of newly created Object

// So we can create the objects in two ways
// 1. Using Function Constructor.
// 2. Using Object.Create Method

const Foo = function() {
    this.greet = 'Hello world!';
}

// Add greeting method in to the Foo Prototype which prints the value of greet variable

Foo.prototype.greeting = function() {
    console.log('I want to say: ' + this.greet);
};

// Now Create an Object
const bar = new Foo();

const baz = Object.create(Foo.prototype);

var chkbar = bar.greeting();  // prints 'I want to say: Hello world!'
var chkbaz = baz.greeting();  // prints `I want to say: undefined`
