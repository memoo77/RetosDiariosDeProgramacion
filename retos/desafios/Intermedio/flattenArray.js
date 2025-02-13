/* Today's JavaScript challenge is **Intermediate Level**:  

**Desafío:**  
**Crea una función llamada `flattenArray` que tome un array con múltiples niveles de anidación y lo convierta en un array plano sin usar `flat()`.**  

**Instrucciones:**  
1. La función debe aceptar un array con elementos anidados en múltiples niveles.  
2. Debe devolver un array con todos los elementos en un solo nivel.  
3. Usa recursión o métodos como `reduce` para lograrlo.  

**Ejemplo de entrada:**  
```js
const nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];

const result = flattenArray(nestedArray);
console.log(result);
```

**Salida esperada:**  
```js
[1, 2, 3, 4, 5, 6, 7, 8]
```

**Propósito del desafío:**  
Aprender a manejar estructuras de datos anidadas, usar recursión y optimizar la manipulación de arrays en JavaScript.  

Cuando tengas tu solución, revísala bien y envíamela para análisis y mentoría. ¡Buena suerte! 🚀 */

const nestedArray = [1, 
                        [2, 
                            [3, 4], 
                        5], 
                            [6, [7]],
                     8];

            
const nestedArray2 = [1, ['hello', [2, 'world']], 3];


const flattenArray = (data) => {
    console.log({data});
    

    let newArray = [];
    // if (!Array.isArray(data)) {
         
    // }
    for (const key in data) {
        if (!Array.isArray(data[key])) { //Si la data no es un array entonces es un primitivo y se agrega al array de forma directa
            newArray.push(data[key])
        } else {

            newArray = newArray.concat(flattenArray(data[key])) //Si es un array se debe realizar recursividad para que el valor que es un array se pueda descomponer en un primitivo.
        }
    }
    return newArray;
}



const result = flattenArray(nestedArray2);
console.log({result});





