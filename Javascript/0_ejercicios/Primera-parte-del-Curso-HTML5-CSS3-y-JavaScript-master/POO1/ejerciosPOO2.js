 //const num1 = 7;

 alert("The value of num1 is " + num1); // AQUI SE ROMPE EL CODIGO ?

 function demonstrateScopingAndHoisting() {
     if (false) {
         //let num2 = 43;
     }
     try {
         alert("The value of num2 is " + num2);
     }
     catch (err) {
         alert("Error:" + err);
     }
 }
 //var num1 = 42;
 //const num1 = 42;
 //let num1 = 42;
 //num1 = 42;
 demonstrateScopingAndHoisting();

 /*$ = (x)=>document.getElementById(x);
 /*function $(x) {
     x = document.getElementById(x);
 }*/
 //$("p1").innerText += "y el Valor para el parrafo llamado desde $";

 export function sum(x,y){return x+y;}

 export function resta(x,y){return x-y;}




