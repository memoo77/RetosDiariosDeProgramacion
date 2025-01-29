/**
 * Desafío: Comprobar Palíndromos

Este desafío consiste en crear una función llamada isPalindrome que determine si una cadena de texto es un palíndromo o no. 
Un palíndromo es una palabra, frase o secuencia que se lee igual al derecho y al revés, ignorando mayúsculas, minúsculas y espacios.

Instrucciones
	1.	Entrada: La función recibirá una cadena de texto.
	2.	Salida: Devolverá un valor booleano (true o false) dependiendo de si la cadena es un palíndromo.
	3.	Requisitos:
	•	Ignorar diferencias entre mayúsculas y minúsculas.
	•	Eliminar espacios para evaluar correctamente la secuencia de caracteres.

Ejemplos de Uso
console.log(isPalindrome("Amo la paloma")); // true
console.log(isPalindrome("JavaScript"));   // false

Explicación:
	•	En el primer ejemplo, al normalizar la cadena ("amolapaloma"), se lee igual al derecho y al revés, por lo que es un palíndromo.
	•	En el segundo ejemplo, la cadena no cumple esta condición, por lo que no es un palíndromo.

Notas
	•	Puedes utilizar métodos como toLowerCase, split, reverse y join para procesar la cadena.
	•	Recuerda asegurarte de que la solución sea clara y bien documentada en el código.
 */



const cleanAccentText = ( cleanAccent ) => {
	// console.log(`paso por el cleanAccentText ${cleanAccent}`)
	return (cleanAccent.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
}

const isPalindrome = ( checkText ) => {
	
	if (checkText < 0){
		checkText = checkText * -1;
		checkText = checkText.toFixed(0);
	}
	if (typeof(checkText) === 'number') {
		checkText = checkText.toFixed(0);
		checkText = checkText.toString();
	}
	if (checkText === " " || !checkText ) return `${checkText} = false`
	if (checkText.length === 1) return `${checkText} = true`

	// console.log({checkText})
    let cleanedText = cleanAccentText(checkText)
	// console.log({cleanedText})
	cleanedText = cleanedText.toLowerCase()
											  .split(" ")
											  .join("")
											  .split("")
											  .join("");

	const result = ( cleanedText === cleanedText.split("").reverse().join("") ) ? true:false
	// console.log( `${cleanedText} === ${cleanedText.split("").reverse().join("")}` )
	return `${checkText} = ${result}`;
}



console.log(isPalindrome("Amo la paloma")); // true
console.log(isPalindrome("JavaScript"));   // false
console.log(isPalindrome("J"));   // true
console.log(isPalindrome("Amó la paloma"));   // true
console.log(isPalindrome(" "));   // false
console.log(isPalindrome("Amo la pacífica paloma"));   // true
console.log(isPalindrome("Dábale arroz a la zorra el abad"));   // true
console.log(isPalindrome("123321"));   // true
console.log(isPalindrome(-12332.1));   // true
console.log(isPalindrome(null));   // true
console.log(isPalindrome(undefined));   // true
