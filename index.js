let a;
// a = 600;
// a = 500;
// console.log(a);


// const b;

// b = 600;


{
  //block
  //Compound Statements
  // Used in the expression where the syntax expects single statement
  // let and const are block scoped.
  let a = 5;
  const b = 6;
  var c = 7;

  //Are let and const declarations hoisted? Yes, they are hoisted however they are hoisted in a different manner than var declaration. These are in the temporal dead zone for the time being. 





  // here you will see that before execution of code
  // let and const will be declared undefined in a separate memory space named block
  // where as var is declare as undefined in the global scope.
  // let and const variables are not accessible outside the block.
  // Everything in the block scope is destroyed after its execution.
  // var is function scoped

  // var variables are ‘function scope.’ What does this mean? It means they are only available inside the function they’re created in, or if not created inside a function, they are ‘globally scoped.’
  //If var is defined inside a function and I subsequently try to call it outside the function, it won’t work.
  // Refrence: https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe
}

console.log(a);
console.log(b);
console.log(c);