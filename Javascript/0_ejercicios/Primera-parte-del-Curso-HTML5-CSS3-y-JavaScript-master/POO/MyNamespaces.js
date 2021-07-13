const MyNamespace = {

    myFunction1: function(someParameters){
        alert(someParameters);
    },

    myFunction2: function(someParametersAgain){
        alert(someParametersAgain);
        //alert(MyNamespace.message); Funciona
        //alert(this.message); Funciona
        alert(message); //No funciona
    },
    message: "Hello World",
    count: 42
}
import {sum,resta } from './ejerciosPOO2.js';
alert("La suma de 4+4 es"+sum(4,4));
alert("La resta de 5-2 es:"+resta(5,2));

