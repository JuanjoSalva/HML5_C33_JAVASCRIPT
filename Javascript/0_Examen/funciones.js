
/*MIGUEL ANGEL INICIO 38*/
function Pract38(numero){
    let factoresPrimos2 = [];

    factoresPrimos2 = [];
    for (let index = numero; index >0; index--) {

        if ((numero%index)==0)
        {
            //index es un factor primo del valor introducido
            factoresPrimos2.push(index);
        }
    }
    mostrarResultado(numero, factoresPrimos2);
    document.getElementById("num381").value="";
    document.getElementById("num381").focus();
}
function mostrarResultado(numero, factoresPrimos)
    {
        document.getElementById("result38").innerHTML = '';
        if (factoresPrimos.length==0)
        {
            document.getElementById("result38").innerHTML = "<p>El número " + numero + " no tiene factores primos.</p>";
        }
        else
        {
            let linea = "<p>El número " + numero + " tiene los siguientes factores primos:<p>";
            for (let index = 0; index < factoresPrimos.length; index++) 
            {
                const element = factoresPrimos[index];
                if (index == 0){
                    linea += element;
                }else{
                    linea += "," + element;
                }
            }
            document.getElementById("result38").innerHTML = linea;
        }
    }

/*MIGUEL ANGEL 39*/
function Pract39(numerador, denominador)
    {
        document.getElementById("result39").innerHTML = "";

        /*if (!validarValoresIntroducidos(numerador,denominador))
        {
            return false;
        }*/
        
        //Proceso principal
        if (numerador<denominador)
        {
            document.getElementById("result39").innerHTML = "<p>la fracción " + numerador + "/" + denominador + " es <strong>PROPIA</strong></p>";
        }
        else
        {
            document.getElementById("result39").innerHTML = "<p>la fracción " + numerador + "/" + denominador + " es <strong>IMPROPIA</strong></p>";
        }
        
        //Reinicia valores del formulario
        reiniciaFormulario();
    }
    function validarValoresIntroducidos(numerador,denominador)
    {
        alert('numerador: ' + numerador);
        alert('denominador: ' + denominador);
        if (!Number.isInteger(numerador))
        {
            alert("El numerador no es un valor entero");
            return false;
        }
        if (!Number.isInteger(denominador))
        {
            alert("El denominador no es un valor entero");
            return false;
        }
        if (denominador<0)
        {
            alert("El denominador no es un valor positivo");
            return false;
        }
        if (numerador<0)
        {
            alert("El numerador no es un valor positivo");
            return false;
        }
        return true;
    }
    function reiniciaFormulario()
    {
        document.getElementById("num391").value="";
        document.getElementById("num392").value="";
        document.getElementById("num393").focus();
    }

     /*MIGUEL ANGEL 40*/
     function Pract40(texto)
     {
          //limpiamos el área de resultados
         document.getElementById("txt402").innerHTML = "";
 
         //Proceso principal
         let nuevoTexto ='';
 
         for (let index = 0; index < texto.length; index++) {
             const letra = texto[index];
             let  asciiLetra = letra.charCodeAt(0);
             if (letra == 'z')
             {
                 nuevoTexto +='a';
             }
             else
             {
                 nuevoTexto +=String.fromCharCode(asciiLetra+1); 
             }
         }
         let linea = "<p>Texto original:  " + texto + "</p>";
         linea += "<p>Nuevo texto:  " + nuevoTexto + "</p>";        
         document.getElementById("txt402").innerHTML = linea;
     }


     /*MIGUEL ANGEL 41*/
    function Pract41(texto)
    {
        //limpiamos el área de resultados
        document.getElementById("txt412").innerHTML = "";


        //Proceso principal
        let nuevoTexto ='';
        for (let index = 0; index < texto.length; index++)
        {
            let letraActual = texto[index];
            if (nuevoTexto.indexOf(letraActual)<0)
            {
                nuevoTexto += letraActual;
            }            
        }
        let linea = "<p>Texto original:  " + texto + "</p>";
        linea += "<p>Nuevo texto:  " + nuevoTexto + "</p>";
        document.getElementById("txt412").innerHTML = linea;
    }


    /*MIGUEL ANGEL 42*/
    function Pract42(texto)
    {
        //limpiamos el área de resultados
        document.getElementById("txt422").innerHTML = "";

        if (texto.length==0)
        {

            alert("El texto debe contener al menos un dígito");
            /*document.getElementById("txt422").focus;*/
            return false;
        }

        //Proceso principal
        let nuevoTexto ="$" + texto.substring(1);
        
        let linea = "<p>Texto original:  " + texto + "</p>";
        linea += "<p>Nuevo texto:  " + nuevoTexto + "</p>";
        document.getElementById("txt422").innerHTML = linea;
    }

    let factoresPrimos = []; //Aquí introducimos el resultado
    let numeros = [];

    /*Ejer 43 Inicio*/
    function obtenerResultado43(){
        let numero = document.getElementById("numero").value;
        numero = numero *1;

        if (!Number.isInteger(numero))
        {
            return false;
        }
        let linea = "El número introducido ["+ numero + "] es menor o igual a 15";
        if (numero>15)
        {
            linea = "El número introducido ["+ numero + "] es mayor que 15";
        }
        document.getElementById("resultados").innerHTML = linea;
    }
    /*Ejercicio 43 Fin*/

    /*Ejercicio 45 Inicio*/
    function reiniciar(){
        numeros = [];
        document.getElementById("resultados2").innerHTML = "";
        document.getElementById("numero45").value = "";
        document.getElementById("numero45").focus();
    }

    function AniadirNumero(){
        let numero = document.getElementById("numero45").value;
        let numeroAux = numero *1;
        /*if (!Number.isInteger(numeroAux))
        {
            alert("El número introducido no es un valor entero");
            return false;
        }*/
        numeros.push(numero);
        mostrarNumeros();
        document.getElementById("numero45").value = "";
        document.getElementById("numero45").focus();
    }

    function mostrarNumeros(){
        let linea = "<p>Números introducidos: ";
        for (let index = 0; index < numeros.length; index++)
        {
            const element = numeros[index];
            linea +=  element + " ";
        }
        linea += "</p>";

        document.getElementById("resultados2").innerHTML = linea;
    }

    /*MIGUEL ANGEL 44*/
    function Pract44(numero)
    {
        //let factoresPrimos = []; //Aquí introducimos el resultado
        document.getElementById("txt442").innerHTML =" ";

        numero = parseInt(numero);
        if (!Number.isInteger(numero))
        {
            alert("El número introducido no es un valor entero");
            return false;
        }
        if (numero<0)
        {
            alert("El número debe ser positivo");
            return false;
        }

        if (numero>32767)
        {
            alert("El número debe ser entero positivo de 16 bits y no puede superar el valor 32767");
            return false;
        }

        let binario =  convertDecimalToBinary(numero);

        let binarioInvertido =  (invertirBinario(binario));
        let numeroinvertido = binaryToDecimal(binarioInvertido);

        let linea = "<p>El número introducido ["+ numero + "] en binario es [" + binario + "]</p>";
        linea += "<p>El número invertido es ["+ numeroinvertido + "] en binario es [" + binarioInvertido + "]</p>";
        

        document.getElementById("txt442").innerHTML = linea;
    }
    function invertirBinario(numero)
    {
        let nuevoNumero="";
        for (let index = 0; index < numero.length; index++) {
            if (numero[index]=='1')
            {
                nuevoNumero += '0';
            }
            else{
                nuevoNumero += '1';
            }
        }
        return nuevoNumero;
    }

    function binaryToDecimal(binaryNumber)
    {
        var total = 0;
        for(var i = 0; i < binaryNumber.length; i++){
            var bit = binaryNumber.charAt(binaryNumber.length - (i + 1 ));
            if(bit == 1){
                var temp = Math.pow(2, i* parseInt(bit));
                total += temp;
            }
        }

        return total;
    }

    function convertDecimalToBinary(number)
    {
        var binary = "";
        var temp = number;

        while(temp > 0){
            if(temp % 2 == 0){
                binary = "0" + binary;
            }
            else {
                binary = "1" + binary;
            }

            temp = Math.floor(temp / 2);
        }

        return binary;
    }

    /*Ejercicio 45 Fin*/
    function obtenerResultado45(){
        let resultado ='0';
        for (let index = numeros.length-1; index >=0 ; index--) {
            const element = numeros[index];
            if (element[element.length-1]=='0')
            {
                resultado = element;
                break;
            }
        }

        let linea = document.getElementById("resultados2").innerHTML ;

        if (resultado=='0')
        {
            linea += "<p>El array no tiene ningun número que finalice en 0</p>";
        }
        else
        {
            linea += "<p>El número redondo más a la derecha del array de números es:" + resultado + "</p>";
        }
        document.getElementById("resultados2").innerHTML = linea;
    }

 /*MIGUEL ANGEL FIN*/



 /*JUAN RAMON INICIO*/
/*Ejercicio 46 Fin*/
const obtnerextension = function ()
{
    var pathfichero = document.getElementById("myFile").value;
    if (!(document.getElementById("myFile").value))
    {   alert ("selecciona un archivo");
        document.getElementById("myFile").click();
        return (false);
    }
    var posicionultimopunto = pathfichero.lastIndexOf(".");
    var resultado = pathfichero.substring(posicionultimopunto + 1);
    if (posicionultimopunto < 0)
    {
        document.getElementById("divresultado46").innerText ="El fichero seleccionado no tiene extensión";
    }
    else
    {
         document.getElementById("divresultado46").innerText ="La extensión del archivo es " + resultado;
    }

}
/*Ejercicio 47 Fin*/
const myfuncion47 = function ()
        {

            let resultado ="SI";
            document.getElementById("divresultado47").innerText="";

            var numero = document.getElementById("entrada47").value;
            var patron = /^\d+$/; //Expresión regular para aceptar solo números enteros

            if (patron.test(numero)) {
                           var caracter = numero.charAt(0);
                for (var i = 1; i< numero.length; i++) {
                    var nuevocaracter = numero.charAt(i);
                    if (caracter != nuevocaracter)
                    {
                        resultado="NO";
                                break;
                    }
                }
            }else {
                alert("el valor del número debe ser entero positivo");
                numero.focus();
                return (false);
            }
            document.getElementById("divresultado47").innerText ="Los digitos "+ resultado + " son todos iguales";

        }

/*Ejercicio 48 Fin*/
const myfuncion48 = function ()
    {
        let arraynumeros1 = new Array();
        let arraynumeros2 = new Array();
        let n1 = Math.round( (Math.random () * 100));
        let n2 = Math.round( (Math.random () * 100));
    for (let i=0;i< n1; i ++){
        arraynumeros1.push (Math.round( (Math.random () * 100)));
    }

    for (let i=0;i< n2; i ++){
     arraynumeros2.push (Math.round( (Math.random () * 100)));
    }
    document.getElementById("divresultado48").innerText="";
    document.getElementById("divresultado48").innerHTML="Array 1: <br>" + arraynumeros1;
    document.getElementById("divresultado48").innerHTML+="<br>";
    document.getElementById("divresultado48").innerHTML+="Elementos de Array 1: " + arraynumeros1.length;
    document.getElementById("divresultado48").innerHTML+="<br>";
    document.getElementById("divresultado48").innerHTML+="Array 2: <br>" + arraynumeros2;
    document.getElementById("divresultado48").innerHTML+="<br>";
    document.getElementById("divresultado48").innerHTML+="Elementos de Array 2: " + arraynumeros2.length;

}

/*Ejercicio 49 Fin*/
const myfuncion49 = function ()
{
   const ruta = "/var/log/mysql/error.log";
   let str =ruta;
   document.getElementById("divresultado49").innerHTML= str + "<br>";
   let posicionultimopunto =  str.lastIndexOf("/") ;
   do {
    posicionultimopunto =  str.lastIndexOf("/") ;
    document.getElementById("divresultado49").innerHTML+=str.substring(posicionultimopunto + 1) + "<br>";
    str = str.substring(0,posicionultimopunto );
    } while (str!="" && posicionultimopunto >0);
        /* visualizacion */
        document.getElementById("codigojavascript49").innerHTML=  "<pre>" + myfuncion + "</pre>";
}
/*Ejercicio 50 Fin*/
const myfuncion50 = function ()
    {
        var arraycadenas = ["la mas larga","casa", "arbol", "caserio", "pepe", "roma", "a", "romo", "cero"];
        document.getElementById("divresultado50").innerHTML = arraycadenas + "<br>";
        arraycadenas.sort(function(a, b){return a.length-b.length});
        document.getElementById("divresultado50").innerHTML += arraycadenas;
        /* visualizacion */
        document.getElementById("codigojavascript50").innerHTML=  "<pre>" + myfuncion + "</pre>";
    }

/*Ejercicio 51 Fin*/
const myfuncion51 = function (valor) {

    let url = document.getElementById("txturl51").value;
    let matriz = new Array();
    let url1 = url.substr(url.indexOf("://") + 3, url.length);
    matriz = url1.split("/");
    if (url.indexOf("://") != -1)
        matriz.splice(0, 0, url.substr(0, url.indexOf("://") + 3));
    /* visualizacion */
    for (let i = 0; i < matriz.length; i++) {
        let  li = document.createElement("li");
        li.innerText = matriz[i];
        document.getElementById("lista51").appendChild(li);
    }
}

/*Ejercicio 52 Fin*/
const myfuncion52 = function( valor)
{
    var elemento52 = Math.round(Math.random() * 1000);
    let suma52=0;
    let elementos52 = new Array();

    elementos52.push(valor);
    suma52= suma52 + (valor +1) ;

    if ( suma52  <= elemento52)
    {
        valor++;
        myfuncion52 (valor);
    }
    else
        {

        document.getElementById("divresultado52").innerHTML= "Número base: " +elemento52  + "<br>";
        document.getElementById("divresultado52").innerHTML+= elementos52 + "<br>";

        document.getElementById("divresultado52").innerHTML+="Número Máximo: " + valor + "<br>";
        }
}
/*Ejercicio 53 Fin*/

const myfuncion53 = function  ( valor){
    var elemento53 =  Math.round(Math.random() * 20) ;
    let suma53=0;
    let elementos53 = new Array();

    if (suma53==0) {
        elementos53 = [];
        elemento53 =  Math.round(Math.random() * 20)
    }
    let cubo = valor*valor*valor;
    elementos53.push(cubo);
    suma53 = suma53 + cubo ;
    if ( valor  < elemento53)
    {
        valor++;
        myfuncion53 (valor);
    }
    else
        {
        document.getElementById("divresultado53").innerHTML= "Número base: " +elemento53  + "<br>";
        document.getElementById("divresultado53").innerHTML+= "cubos: " + elementos53 + "<br>";

        document.getElementById("divresultado53").innerHTML+="Número Máximo: " + suma53 + "<br>";
        }
}
 /*JUAN RAMON FIN*/



 /*JAVIER INICIO*/
 /*Ejercicio 60*/
 function CalcularNumero()
 {
     var result;
     var mensaje = "Introduzca un número"
     document.getElementById("ValEj60").innerHTML = "Solución: ";
     while (valUsuario==undefined || valUsuario=="")
     {
         var valUsuario = prompt(mensaje);

         //Si el usuario pulsa cancelar salimos
         if(valUsuario == null | valUsuario ==  "") {
             document.getElementById("ValEj60").innerHTML = "Solución: El usuario no seleccionó ningún valor." ;
             break;
         }

         valUsuario = Number(valUsuario);
         //Comprobamos que el usuario a introducido un numero
         if(isNaN(valUsuario)){
             valUsuario = "";
             mensaje = "El valor introducido no es valido vuelva a intentarlo. Cancelar para Salir";
         }
         else{
             if(valUsuario - 19 > 0){result = Math.abs(valUsuario - 19) * 3;}
             else{result = Math.abs(valUsuario - 19);}
             document.getElementById("ValEj60").innerHTML = "Solución: " + result;
             break;
         }
     }
 }
/*Ejercicio 61*/
function Devolver50()
        {
            var result;
            var mensaje1 = "Introduzca el primer número";
            var mensaje2 = "Introduzca el segundo número";
            document.getElementById("ValEj61").innerHTML = "Solución: ";
            while (valUsuario1 == undefined || valUsuario1=="" || valUsuario2 == null || valUsuario2 ==  "")
            {
                if (valUsuario1 == undefined || valUsuario1 == ""){var valUsuario1 = prompt(mensaje1);}

                //Si el usuario pulsa cancelar salimos
                if(valUsuario1 == null | valUsuario1 ==  "") {
                    document.getElementById("ValEj61").innerHTML = "Solución: El usuario no seleccionó ningún valor." ;
                    break;
                }

                valUsuario1 = Number(valUsuario1);

                var valUsuario2 = prompt(mensaje2);

                //Si el usuario pulsa cancelar salimos
                if(valUsuario2 == null | valUsuario2 ==  "") {
                    document.getElementById("ValEj61").innerHTML = "Solución: El usuario no seleccionó el segundo valor." ;
                    break;
                }

                valUsuario2 = Number(valUsuario2);


                //Comprobamos que el usuario a introducido un numero en las dos ocasiones
                if(isNaN(valUsuario1)){
                    valUsuario1 = "";
                    mensaje = "El primer valor introducido no es valido vuelva a intentarlo. Cancelar para Salir";
                }
                else{
                    if(isNaN(valUsuario2)){
                        valUsuario2= "";
                        mensaje = "El segundo valor introducido no es valido vuelva a intentarlo. Cancelar para Salir";
                    }

                    else{
                        if(valUsuario1 + valUsuario2 == 50 | valUsuario1 == 50 | valUsuario2 == 50){result = "Verdadero";}
                        else{result = "Falso";}
                        document.getElementById("ValEj61").innerHTML = "Solución: " + result;
                        break;
                    }
                }
            }
        }
/*Ejercicio 62*/
function EstaEntre()
{
    var result;
    var mensaje1 = "Introduzca un número";
    document.getElementById("ValEj62").innerHTML = "Solución: ";
    while (valUsuario1 == undefined || valUsuario1=="")
    {
        if (valUsuario1 == undefined || valUsuario1 == ""){var valUsuario1 = prompt(mensaje1);}

        //Si el usuario pulsa cancelar salimos
        if(valUsuario1 == null | valUsuario1 ==  "") {
            document.getElementById("ValEj62").innerHTML = "Solución: El usuario no seleccionó ningún valor." ;
            break;
        }

        valUsuario1 = Number(valUsuario1);

        //Comprobamos que el usuario a introducido un numero
        if(isNaN(valUsuario1)){
            valUsuario1 = "";
            mensaje = "El valor introducido no es valido vuelva a intentarlo. Cancelar para Salir";
        }
        else{
            if(valUsuario1 <= 20){
                result = "Valor comprendido entre 0 y 20";
            }
            else if(valUsuario1>20 && valUsuario1<=100){
                result = "Valor comprendido entre 21 y 100";
            }
            else if(valUsuario1>100 && valUsuario1<=400){
                result = "Valor comprendido entre 101 y 400";
            }
            else{result = "Valor mayor de 400";}
        }
        document.getElementById("ValEj62").innerHTML = "Solución: " + result;
        break;
    }
}

/*Ejercicio 63*/
function Imprimir(nombre)
        {
            window.print();
        }
/*Ejercicio 64*/
function Evaluar()
{
    var result;
    var mensaje1 = "Introduzca el primer número";
    var mensaje2 = "Introduzca el segundo número";
    document.getElementById("ValEj64").innerHTML = "Solución: ";
    while (valUsuario1 == undefined || valUsuario1=="" || valUsuario2 == null || valUsuario2 ==  "")
    {
        if (valUsuario1 == undefined || valUsuario1 == ""){var valUsuario1 = prompt(mensaje1);}

        //Si el usuario pulsa cancelar salimos
        if(valUsuario1 == null | valUsuario1 ==  "") {
            document.getElementById("ValEj64").innerHTML = "Solución: El usuario no seleccionó ningún valor." ;
            break;
        }

        valUsuario1 = Number(valUsuario1);

        var valUsuario2 = prompt(mensaje2);

        //Si el usuario pulsa cancelar salimos
        if(valUsuario2 == null | valUsuario2 ==  "") {
            document.getElementById("ValEj64").innerHTML = "Solución: El usuario no seleccionó el segundo valor." ;
            break;
        }

        valUsuario2 = Number(valUsuario2);


        //Comprobamos que el usuario a introducido un numero en las dos ocasiones
        if(isNaN(valUsuario1)){
            valUsuario1 = "";
            mensaje = "El primer valor introducido no es valido vuelva a intentarlo. Cancelar para Salir";
        }
        else{
            if(isNaN(valUsuario2)){
                valUsuario2= "";
                mensaje = "El segundo valor introducido no es valido vuelva a intentarlo. Cancelar para Salir";
            }

            else{
                if(valUsuario1 >= 0 ){result = "El primer número introducido (" + valUsuario1 + ") es positivo ";}
                else{result = "El primer número introducido (" + valUsuario1 + ") es negativo ";}

                if(valUsuario2 >= 0 ){result += "y el segundo (" + valUsuario2 + ") es positivo";}
                else{result += "y el segundo (" + valUsuario2 + ") es negativo";}

                document.getElementById("ValEj64").innerHTML = "Solución: " + result;
                break;
            }
        }
    }
}
/*Ejercicio 65*/
function AddPy()
{
    var result;
    var mensaje1 = "Introduzca el primer número";
    document.getElementById("ValEj65").innerHTML = "Solución: ";
    while (valUsuario1 == undefined || valUsuario1=="")
    {
        if (valUsuario1 == undefined || valUsuario1 == ""){var valUsuario1 = prompt(mensaje1);}

        //Si el usuario pulsa cancelar salimos
        if(valUsuario1 == null | valUsuario1 ==  "") {
            document.getElementById("ValEj65").innerHTML = "Solución: El usuario no seleccionó ningún valor." ;
            break;}

        var patt1 = /\bPy/;
        var posicion =  valUsuario1.search(patt1);
        if (posicion == 0){
            result=valUsuario1;
            }
        else{
            result="Py"+valUsuario1;
            }
        document.getElementById("ValEj65").innerHTML = "Solución: " + result;
        break;
    }
}
/*Ejercicio 66*/
function DelChar()
        {
            var result;
            var cadena;
            var mensaje1 = "Introduzca una cadena";
            var mensaje2 = "Introduzca la posición del caracter que quiere eliminar";
            document.getElementById("ValEj66").innerHTML = "Solución: ";
            while (valUsuario1 == undefined || valUsuario1=="" || valUsuario2 == null || valUsuario2 ==  "")
            {
                if (valUsuario1 == undefined || valUsuario1 == ""){var valUsuario1 = prompt(mensaje1);}

                //Si el usuario pulsa cancelar salimos
                if(valUsuario1 == null || valUsuario1 ==  "") {
                    document.getElementById("ValEj66").innerHTML = "Solución: El usuario no seleccionó ninguna cadena." ;
                    break;
                }
                var valUsuario2 = prompt(mensaje2);

                //Si el usuario pulsa cancelar salimos
                if(valUsuario2 == null || valUsuario2 ==  "") {
                document.getElementById("ValEj66").innerHTML = "Solución: El usuario no seleccionó ninguna posición." ;
                break;
                }

                valUsuario2 = Number(valUsuario2);
                if(isNaN(valUsuario2)){
                        valUsuario2= "";
                        mensaje = "El valor de la posición introducido no es valido vuelva a intentarlo. Cancelar para Salir";
                    }

                else{

                    result = valUsuario1.slice(0,valUsuario2);
                    result += valUsuario1.slice(valUsuario2 + 1,valUsuario1.length);

                    document.getElementById("ValEj66").innerHTML = "Solución: " + result;
                    break;
                }
            }
        }
/*Ejercicio 67*/
function ReplaceString()
        {
            var result;
            var mensaje1 = "Introduzca un texto";
            document.getElementById("ValEj67").innerHTML = "Solución: ";
            while (valUsuario1 == undefined || valUsuario1=="" )
            {
                if (valUsuario1 == undefined || valUsuario1 == ""){var valUsuario1 = prompt(mensaje1);}

                //Si el usuario pulsa cancelar salimos
                if(valUsuario1 == null || valUsuario1 ==  "") {
                    document.getElementById("ValEj67").innerHTML = "Solución: El usuario no seleccionó ningún texto." ;
                    break;
                }

                result =valUsuario1.substr(valUsuario1.length-1,1) + valUsuario1.substr(1,valUsuario1.length-2) + valUsuario1.substr(0,1);

                document.getElementById("ValEj67").innerHTML = "Solución: " + result;
                break;
            }
        }
/*JAVIER FIN*/


/*ESTO ES LO MIO INICIO */
/*Escriba un programa JavaScript para crear una nueva cadena a partir de una cadena dada con el primer
arácter de la cadena dada agregado al principio y al final*/
function Pract68(cadenaOrigen){
    document.getElementById("txt682").style = " font-weight: bold;color:blue;"

    if ((cadenaOrigen.trim()).length > 0) {
        document.getElementById("txt682").innerHTML = cadenaOrigen[0] + cadenaOrigen + cadenaOrigen[0];
    }else{
        document.getElementById("txt682").innerHTML ="Debe introducir un texto";
        document.getElementById("txt682").style = "color:red"
    }
}

/*Escriba un programa JavaScript para comprobar si un número positivo dado es múltiplo de 3 o múltiplo de 7.*/
function Pract69(numeroOrigen){
    document.getElementById("result69").style = " font-weight: bold;color:blue;"

    if (numeroOrigen.length > 0){
        if (numeroOrigen % 3 === 0 || numeroOrigen % 7 === 0){
            document.getElementById("result69").innerHTML = "Es divisible entre 3 o 7";
        }else{
            document.getElementById("result69").innerHTML = "No es divisble entre 3 ni entre 7";
        }
    }else{
        document.getElementById("result69").innerHTML ="Debe introducir un número";
        document.getElementById("result69").style = "color:red"
    }
}

/*Escriba un programa JavaScript para crear una nueva cadena a partir de una cadena dada,
tomando los últimos 3 caracteres y agregándolos al frente y al dorso. La longitud de la cuerda debe ser 3 o más. */
function Pract70(cadenaOrigen){
    document.getElementById("result70").style = " font-weight: bold;color:blue;"
    if ((cadenaOrigen.trim()).length > 0) {
        if (cadenaOrigen.length >= 3){
            let substr =cadenaOrigen.substring(cadenaOrigen.length, cadenaOrigen.length-3) ;
            document.getElementById("result70").innerHTML =     substr + cadenaOrigen + substr;
        }else{
            document.getElementById("result70").innerHTML ="La cadena debe contener, al menos, 3 caracteres";
            document.getElementById("result70").style = "color:red"
        }
    }else{
        document.getElementById("result70").innerHTML ="Debe introducir un texto";
        document.getElementById("result70").style = "color:red"
    }
}

/*Escriba un programa JavaScript para verificar si una cadena comienza con 'Java' y falso en caso contrario.*/
function Pract71(cadenaOrigen){
    document.getElementById("result71").style = " font-weight: bold;color:blue;"
    if ((cadenaOrigen.trim()).length > 0) {
        if (cadenaOrigen.substring(0,4) === 'Java') {
            document.getElementById("result71").innerHTML = "Si empieza por Java";
        }else{
            document.getElementById("result71").innerHTML = "No empieza por Java";
        }
        /*let exp = /\bJava/;
        if (cadenaOrigen.search(exp) == 0){
            document.getElementById("result71").innerHTML = "Sí empieza por Java";
        }else{
            document.getElementById("result71").innerHTML = "No empieza por Java";
        }*/
    }else{
        document.getElementById("result71").innerHTML ="Debe introducir un texto";
        document.getElementById("result71").style = "color:red"
    }
}

/* Escriba un programa JavaScript para verificar si dos valores enteros dados están en el
rango 50..99 (inclusive). Devuelve verdadero si alguno de ellos está en dicho rango. */
function Pract72(numeroOrigen1, numeroOrigen2){
    document.getElementById("result72").style = " font-weight: bold;color:blue;"
    if (numeroOrigen1.length > 0 && numeroOrigen2.length > 0){
        if ((numeroOrigen1 >= 50 && numeroOrigen1 <= 99) || ((numeroOrigen2 >= 50 && numeroOrigen2 <= 99))){
            document.getElementById("result72").innerHTML = "Al menos uno de los número está en el rango (50-99)";
        }else{
            document.getElementById("result72").innerHTML = "Ninguno de los números está en el rango (50-99)";
        }
    }else{
        document.getElementById("result72").innerHTML ="Debe introducir 2 numeros";
        document.getElementById("result72").style = "color:red"
    }
}

/*Escriba un programa JavaScript para verificar si tres valores enteros dados están en el
rango 50..99 (inclusive). Devuelve verdadero si uno o más de ellos están en dicho rango. */
function Pract73(numeroOrigen1, numeroOrigen2, numeroOrigen3){
    document.getElementById("result73").style = " font-weight: bold;color:blue;"
    if (numeroOrigen1.length > 0 && numeroOrigen2.length > 0 && numeroOrigen3.length > 0){
        if ((numeroOrigen1 >= 50 && numeroOrigen1 <= 99) || (numeroOrigen2 >= 50 && numeroOrigen2 <= 99) || (numeroOrigen3 >= 50 && numeroOrigen3 <= 99)){
            document.getElementById("result73").innerHTML = "Al menos uno de los número está en el rango (50-99)";
        }else{
            document.getElementById("result73").innerHTML = "Ninguno de los números está en el rango (50-99)";
        }
    }else{
        document.getElementById("result73").innerHTML ="Debe introducir 2 numeros";
        document.getElementById("result73").style = "color:red"
    }
}

/*Escriba un programa JavaScript para obtener la fecha actual. Resultado  esperado :
    mm-dd-aaaa, mm / dd / aaaa o dd-mm-aaaa, dd / mm / aaaa */
function Pract74(){
    let fecha =new Date();
    let dia =fecha.getDate();
    let mes = fecha.getMonth();
    let year =fecha.getFullYear();

    /*mm-dd-aaaa*/
    document.getElementById("result741").innerHTML = mes + '-' + dia + '-' + year;
    /*mm/dd/aaaa o dd-mm-aaaa*/
    document.getElementById("result742").innerHTML = mes + '/' + dia + '/' + year + '&nbsp;&nbsp;&nbsp;-o-&nbsp;&nbsp;&nbsp;' + dia + '-' + mes + '-' + year;
    /*dd/mm/aaaa*/
    document.getElementById("result743").innerHTML = dia + '/' + mes + '/' + year;
}

/*Escriba un programa JavaScript para verificar si una cadena "Script" se presenta en la quinta posición (índice 4)
en una cadena dada, si "Script" se presenta en la cadena, devuelva la cadena sin "Script"; de lo contrario,
devuelva la original.*/
function Pract75(cadenaOriginal){
    const Cadena = "Script";
    document.getElementById("result75").style = " font-weight: bold;color:blue;"


    /*let exp = /\Script/;
    if (cadenaOrigen.search(exp) == 0){
        document.getElementById("result75").innerHTML = "Sí empieza por Java";
    }else{
        document.getElementById("result75").innerHTML = "No empieza por Java";
    }*/


    if ((cadenaOriginal.trim()).length > 0) {
        if (cadenaOriginal.includes(Cadena,4)){
            document.getElementById("result75").innerHTML = cadenaOriginal.substring(0,4) + cadenaOriginal.substring(4 + Cadena.length,cadenaOriginal.length);
        }else{
            document.getElementById("result75").innerHTML = cadenaOriginal;
        }
    }else{
        document.getElementById("result75").innerHTML ="Debe introducir un texto";
        document.getElementById("result75").style = "color:red"
    }
}

/*FIN DE LO DE MIO*/
/*******************************************************************************************/
/***************************************************************************************** */