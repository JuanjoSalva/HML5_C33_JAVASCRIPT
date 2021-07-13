var carName = "Volvo";
myFunction();

function myFunction() {
    let a=6;
    document.getElementById("demo").innerHTML = "I can display " + carName;
}

alert(a);
alert(carName);

// Equivalencia de funciones en el momento de la declaración
var x = function (a, b) { return a * b };
var y = x(5, 3);
alert(y);

// ES5
var x = function(x, y) {     return x * y;  }
  
function x(a, b) {
    return a * b;
}
function x(a,b,c){
    return a*b*c;
}

var x = new Function("a", "b", "return a * b");

  // ES6
 const x =  (x, y) => x * y;

