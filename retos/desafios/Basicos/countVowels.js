/* Today's JavaScript challenge is **Basic Level**:  

### **Desafío:**  
**Crea una función llamada `countVowels` que reciba una cadena de texto y devuelva el número de vocales (a, e, i, o, u) que contiene.**  

### **Instrucciones:**  
1. La función debe ser insensible a mayúsculas y minúsculas.  
2. Debe contar todas las vocales en la cadena.  
3. Puedes usar métodos modernos como `filter` o `reduce`.  

### **Ejemplo de uso:**  
```js
console.log(countVowels("Hola Mundo")); // 4
console.log(countVowels("JavaScript")); // 3
console.log(countVowels("BCDFG")); // 0
```

### **Propósito del desafío:**  
- Practicar la manipulación de strings en JavaScript.  
- Aprender a recorrer y filtrar caracteres dentro de una cadena.  
- Aplicar métodos funcionales de arrays.  

Cuando tengas tu solución, revísala bien y envíamela para análisis y mentoría. ¡Buena suerte! 🚀*/


const countVowels = (data) => {
    const vowels = new Set(["a", "e", "i", "o", "u"]);

    //Valida si data no sea null, undefined ni distinto de un string.
    if (!data || typeof(data) != 'string' ) {
        return `{${data}} no es válido. Se esperaba una cadena.`
    }

    
    const toArrayCharacters = data.toLowerCase().split("");
    let counter = 0;
    toArrayCharacters.forEach(vowel => {
        if (vowels.has(vowel)) counter ++ }
        
    );


   return counter;
    

};




console.log(countVowels("Hola Mundo")); // 4
console.log(countVowels("JavaScript")); // 3
console.log(countVowels("BCDFG")); // 0
console.log(countVowels(3)); // 0
console.log(countVowels(undefined)); // 0
console.log(countVowels(null)); // 0
console.log(countVowels("erfrERfs$as_r31123asd2sdfr3aacroepalmzaqiekmfjdiqEDiEE!cjcns/*qs!2"));