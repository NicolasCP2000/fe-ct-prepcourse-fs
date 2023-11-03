/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
    // Usar el método toUpperCase() para convertir la primera letra del nombre a mayúscula.
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   // Invocar/ejecutar el callback `cb`.
  cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:

    // Ejecutar el callback pasándole los dos números como parámetros.
  const resultado = cb(num1, num2);

  // Retornar el resultado del callback.
  return resultado;
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
    // Declarar una variable para almacenar el resultado de la suma.
  let suma = 0;

  // Iterar sobre el arreglo de números.
  for (const numero of arrayOfNumbers) {
    // Sumar el número actual al acumulador.
    suma += numero;
  }

  // Invocar el callback pasándole el resultado de la suma.
  cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
    // Iterar sobre el arreglo.
  for (const elemento of array) {
   // Ejecutar el callback pasándole el elemento como argumento.
   cb(elemento);
 }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
    // Declarar un nuevo arreglo para almacenar los resultados.
  const newArray = [];

  // Iterar sobre el arreglo original.
  for (const elemento of array) {
    // Guardar el resultado del callback en el nuevo arreglo.
    newArray.push(cb(elemento));
  }

  // Retornar el nuevo arreglo.
  return newArray;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
     // Declarar un nuevo arreglo para almacenar los resultados.
  const newArray = [];

  // Iterar sobre el arreglo original.
  for (const string of arrayOfStrings) {
    // Si el string comienza con la letra "a", agregarlo al nuevo arreglo.
    if (string.charAt(0) === "a") {
      newArray.push(string);
    }
  }

  // Retornar el nuevo arreglo.
  return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
