/* Desafío:
Crea una función llamada deepClone que realice una copia profunda de un objeto anidado 
sin utilizar JSON.parse(JSON.stringify(obj)) ni structuredClone().

Instrucciones:
	1.	La función debe aceptar un objeto como parámetro y devolver una copia independiente.
	2.	Debe manejar objetos anidados y arreglos dentro del objeto.
	3.	No debe perder propiedades especiales como métodos o instancias de clases.
	4.	Usa técnicas como recursión y Object.prototype para asegurarte de que todas 
        las propiedades son copiadas correctamente.

Ejemplo de entrada:

const original = {
  name: "Objeto",
  details: {
    age: 5,
    data: [1, 2, 3],
  },
  method() {
    return "Hola";
  }
};

const copy = deepClone(original);
copy.details.age = 10;
copy.details.data.push(4);

console.log(original.details.age); // 5
console.log(original.details.data); // [1, 2, 3]
console.log(copy.details.age); // 10
console.log(copy.details.data); // [1, 2, 3, 4]
console.log(copy.method()); // "Hola"

Propósito del desafío:
Aprender a manipular objetos en profundidad, entender cómo funcionan las referencias en JavaScript y mejorar el conocimiento sobre programación recursiva.
*/


const deepClone = ( objToClone ) => {

  let copyObj = Array.isArray(objToClone) ? [] : {};
  // valida si es un primitivo, si lo es lo devuelve de forma directa, si no
  // mira si es un array o un objeto

  if (typeof(objToClone) === 'function') {
    return objToClone;
    //en este caso se asigna directamente al objToclone, para que salga del deepClone
    //y poble el copy, de esta manera referencia la función y todo opera tal cual.
  }
  if (typeof(objToClone) !== 'object' || objToClone === null) {
    return copyObj;
  }

  //en este ciclo for in procesa cada propiedad del objeto
  //se itera y realiza una recursividad asi mismo
  //buscando encontrar el valor primitivo para poder asignarlo a la key correspondiente
  for (const key in objToClone) {
    if (objToClone.hasOwnProperty(key)){
      copyObj[key] = deepClone(objToClone[key])
    }
  }
  return copyObj;
}

const original = {  //objeto primer nivel
    name: "Objeto...",  //primitivo: string
    details: { // objeto de segundo nivel
      age: 5, //primitivo number
      data: [1, 2, 3], //array-objeto
    },
    method() {  // función que devuelve "hola" un primitivo de tipo string
      return "Hola"; 
    }
  };
  
  const copy = deepClone(original);
  console.log({copy})
  copy.details.age = 10;
  copy.details.data.push(4);
  
  console.log(`original.details.age: ${original.details.age}`); // 5
  console.log(`${original.details.data}`); // [1, 2, 3]
  console.log(`copy.details.age: ${copy.details.age}`); // 10
  console.log(copy.details.data); // [1, 2, 3, 4]

  console.log(original.method()); // "Hola"
  console.log(copy.method()); // "Hola"

  copy.method = () => {return 'Hola desde copy'};
  console.log(copy.method())




    

  
