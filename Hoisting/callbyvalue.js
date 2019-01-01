// Primitive Vs Object
// Primitive worked as call by value a new copy is created.
// Object : it will work as call by reference , Copy is created , They do not reference anything
// Example of Primitive
var a = 23;
var b = a;
a = 46;
console.log(a); //46
console.log(b); //23

// Example of Objects : No Copy is created , They reference to some value

var obj1 = {
    name:'john',
    age:26 
};
var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);