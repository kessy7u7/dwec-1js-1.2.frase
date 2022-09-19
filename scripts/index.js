'use strict'

let cadena = prompt("Introduzca una frase:");

console.log("Frase: \"" + cadena + "\"");
console.log(letras(cadena) + " letras y " + palabras(cadena) + " palabras");
console.log(maysc(cadena));
console.log(titulo(cadena));
console.log(letrasReves(cadena));
console.log(palabrasReves(cadena));
console.log(palindromo(cadena) ? "Sí" : "No" + " es un palíndromo")
