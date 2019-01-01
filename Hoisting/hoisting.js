// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. 
// Hoisting means variable declaration are processed before any code is executed
// var a ; // Declare the varriable
// a = 10; //Initialization the varible
// var a = 250; // In this statement javascript will first declare the variable then initialize the variable
function checkhosting(){
    a = 20;
    var b = 10;
}

checkhosting();
// console.log(a);
// console.log(b);

