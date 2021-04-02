// Closure: A function bind together with its lexical environment//scope [Function + Lexical Scope]
var a = 10000;
function x() {
    a = 5;
    function y() {  
        console.log(a);
    }
    return y;
}

var z = x();

z();  //5
a = 700;
z(); //700
a = 60000;
z(); //60000
console.log(a); //60000


