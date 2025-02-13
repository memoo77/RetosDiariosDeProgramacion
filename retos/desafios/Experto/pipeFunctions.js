/* Today's JavaScript challenge is **Expert Level**:  

### **Desafío:**  
**Crea una función llamada `pipeFunctions` que reciba múltiples funciones como argumentos y devuelva una nueva función que aplique esas funciones en secuencia a un valor de entrada.**  

### **Instrucciones:**  
1. `pipeFunctions` debe aceptar un número variable de funciones como argumentos.  
2. La función devuelta debe tomar un valor inicial y aplicarle cada función en el orden recibido.  
3. Usa técnicas avanzadas como `reduce` o `recursion` para lograr la composición de funciones.  

### **Ejemplo de uso:**  
```js
const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;
const square = (x) => x * x;

const pipeline = pipeFunctions(add2, multiply3, square);
console.log(pipeline(2)); // ((2 + 2) * 3)² = 144
```

### **Salida esperada:**  
```js
144
```

### **Propósito del desafío:**  
- Aprender sobre composición de funciones.  
- Mejorar el manejo de funciones de orden superior.  
- Aplicar conceptos funcionales avanzados en JavaScript.  

Cuando tengas tu solución, revísala bien y envíamela para análisis y mentoría. ¡Buena suerte! 🚀*/