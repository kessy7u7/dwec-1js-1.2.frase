'use strict'

function letras(cadena) {
	return cadena.length;
}

function palabras(cadena) {
	return cadena.split(" ").length;
}

function maysc(cadena) {
	return cadena.split(" ").map(paraula => paraula = paraula.toLocaleUpperCase()).join(" ");
}

function titulo(cadena) {
	let paraules = cadena.split(" ");
	return paraules.map(paraula => paraula = paraula[0].toLocaleUpperCase() + paraula.substr(1)).join(" ");
}

function letrasReves(cadena) {
	let letras = cadena.split("");
	return letras.reverse().join("");
}

function palabrasReves(cadena) {
	let paraules = cadena.split(" ");
	return paraules.reverse().join(" ");
}

function palindromo(cadena) {
	cadena = cadena.split(" ").join("").toLocaleLowerCase();
	let cadenaReves = letrasReves(cadena).split(" ").join("").toLocaleLowerCase();
	return cadena == cadenaReves;
}

/**
module.exports = {
	letras,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo
}
*/