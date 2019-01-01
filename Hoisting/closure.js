// Lexical Scoping : How a parser resolves the varriable names when functions are nested
// Nested functions have access to variables declared in their outer scope.
// If the variable is not inside the child function then parser looks the local variables in outer function
// We can user closure if we want to associate some data of outer function to inner function
// Definition : Closure gives access to outer function scope from an inner function scope.
// When to use closure : It is used for hidding implementataion details. i.e user can not see the inner function implementations
function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7

// Also outer function scope will be changed if you changed the inner function scope

function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());