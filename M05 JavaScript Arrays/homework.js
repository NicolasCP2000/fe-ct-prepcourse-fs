/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   if (array.length > 0) {
      return array[0]; // Devolver el primer elemento del arreglo
  } else {
      return undefined; // Devolver undefined si el arreglo está vacío
  }
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   if (array.length > 0) {
      return array[array.length - 1]; // Devolver el último elemento del arreglo
  } else {
      return undefined; // Devolver undefined si el arreglo está vacío
  }
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length; // Retornar la longitud del arreglo
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   // Crear un nuevo arreglo para almacenar los elementos incrementados
   const resultado = [];
   
   // Recorrer el arreglo original y agregar cada elemento incrementado al nuevo arreglo
   for (let i = 0; i < array.length; i++) {
       resultado.push(array[i] + 1);
   }
   
   return resultado;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento); // Agregar el elemento al final del arreglo
   return array; // Retornar el arreglo modificado
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento); // Agregar el elemento al comienzo del arreglo
   return array; // Retornar el arreglo modificado
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' '); // Unir las palabras con espacios y retornar como una sola cadena
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento); // Utilizar el método includes para verificar si el elemento está en el arreglo
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   // Utilizar el método reduce para sumar todos los elementos del arreglo
   const suma = arrayOfNums.reduce((acumulador, numero) => acumulador + numero, 0);
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   if (resultadosTest.length === 0) {
      return 0; // Si el arreglo está vacío, retornar 0 para evitar división por cero
  }
  
  // Calcular la suma de los resultados del test
  const suma = resultadosTest.reduce((acumulador, nota) => acumulador + nota, 0);
  
  // Calcular el promedio dividiendo la suma por la cantidad de elementos
  const promedio = suma / resultadosTest.length;
  
  return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   if (arrayOfNums.length === 0) {
      return undefined; // Si el arreglo está vacío, retornar undefined o cualquier otro valor que consideres apropiado
  }
  
  // Utilizar el método Math.max para encontrar el número más grande en el arreglo
  return Math.max(...arrayOfNums);
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0; // No se pasaron argumentos, retornar 0
  } else if (arguments.length === 1) {
      return arguments[0]; // Se pasó un argumento, retornarlo tal como está
  } else {
      let producto = 1;
      for (let i = 0; i < arguments.length; i++) {
          producto *= arguments[i];
      }
      return producto; // Multiplicar todos los argumentos y retornar el producto
  }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let contador = 0;
   for (let i = 0; i < array.length; i++) {
       if (array[i] > 18) {
           contador++;
       }
   }
   return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
 } else if (numeroDeDia >= 2 && numeroDeDia <= 6) {
    return "Es dia laboral";
 }
}


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   const numStr = num.toString(); // Convierte el número a cadena
   return numStr.charAt(0) === '9';
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   if (array.length === 0) {
      return true; // Si el arreglo está vacío, todos los elementos son iguales (porque no hay elementos)
  }

  const primerElemento = array[0];
  
  for (let i = 1; i < array.length; i++) {
      if (array[i] !== primerElemento) {
          return false; // Si se encuentra un elemento diferente, retornar false
      }
  }

  return true; // Si no se encontraron elementos diferentes, retornar true
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const mesesBuscados = ["Enero", "Marzo", "Noviembre"];
   const mesesEncontrados = [];

   for (let i = 0; i < array.length; i++) {
       if (mesesBuscados.includes(array[i])) {
           mesesEncontrados.push(array[i]);
       }
   }

   if (mesesEncontrados.length === 3) {
       return mesesEncontrados;
   } else {
       return "No se encontraron los meses pedidos";
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   const tabla = [];
   for (let i = 0; i <= 10; i++) {
       tabla.push(6 * i);
   }
   return tabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   const resultado = [];

   for (let i = 0; i < array.length; i++) {
       if (array[i] > 100) {
           resultado.push(array[i]);
       }
   }

   return resultado;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   const resultado = [];

   for (let i = 0; i < 10; i++) {
       num += 2;
       resultado.push(num);

       if (num === i) {
           return "Se interrumpió la ejecución";
       }
   }

   return resultado;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   const resultado = [];

   for (let i = 0; i < 10; i++) {
       if (i === 5) {
           continue; // Saltar la iteración cuando i sea igual a 5
       }
       num += 2;
       resultado.push(num);
   }

   return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
