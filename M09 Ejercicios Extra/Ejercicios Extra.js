/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

     // Declarar un nuevo arreglo para almacenar los resultados.
  const newArray = [];

  // Iterar sobre las propiedades del objeto.
  for (const key in objeto) {
    // Agregar un nuevo arreglo al nuevo arreglo padre.
    newArray.push([key, objeto[key]]);
  }

  // Retornar el nuevo arreglo.
  return newArray;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
     // Declarar un objeto para almacenar los resultados.
  const result = {};

  // Iterar sobre el string.
  for (const character of string) {
    // Si la letra no existe en el objeto, agregarla con un valor de 1.
    if (!result.hasOwnProperty(character)) {
      result[character] = 1;
    } else {
      // Si la letra ya existe en el objeto, incrementar su valor en 1.
      result[character]++;
    }
  }

  // Ordenar las letras del objeto en orden alfabético.
  Object.keys(result).sort();

  // Retornar el objeto.
  return result;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var upperCaseChars = '';
   var lowerCaseChars = '';
 
   for (var i = 0; i < string.length; i++) {
     if (string[i] === string[i].toUpperCase()) {
       upperCaseChars += string[i];
     } else {
       lowerCaseChars += string[i];
     }
   }
 
   return upperCaseChars + lowerCaseChars;
 }
 
 var result = capToFront("soyHENRY");
 console.log(result); // Resultado: "HENRYsoy"


function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
    // Divide la frase en palabras
  var palabras = frase.split(" ");

  // Invierte cada palabra
  var palabrasInvertidas = palabras.map(function(palabra) {
    return palabra.split("").reverse().join("");
  });

  // Une las palabras invertidas en un nuevo string
  var fraseInvertida = palabrasInvertidas.join(" ");

  return fraseInvertida;
}

var resultado = asAmirror("The Henry Challenge is close!");
console.log(resultado); // Resultado: "ehT yrneH egnellahC si !esolc"


function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
    // Convierte el número a cadena de caracteres
  var numeroStr = numero.toString();

  // Invierte la cadena de caracteres
  var numeroInvertido = numeroStr.split("").reverse().join("");

  // Compara la cadena original con la invertida
  if (numeroStr === numeroInvertido) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
    // Utiliza el método replace con una expresión regular para eliminar las letras "a", "b" y "c"
  var resultado = string.replace(/[abc]/g, '');

  return resultado;
}

var resultado = deleteAbc("abcdeabc");
console.log(resultado); // Resultado: "de"


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
    // Utiliza el método sort con una función de comparación personalizada
  var resultado = arrayOfStrings.sort(function(a, b) {
   // Compara las longitudes de las palabras
   return a.length - b.length;
 });

 return resultado;
}

var arregloOrdenado = sortArray(["You", "are", "beautiful", "looking"]);
console.log(arregloOrdenado); // Resultado: ["You", "are", "looking", "beautiful"]


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
    // Utiliza el método filter para crear un nuevo arreglo con elementos en común
  var interseccion = array1.filter(function(element) {
   return array2.includes(element);
 });

 return interseccion;
}

var resultado = buscoInterseccion([4, 2, 3], [1, 3, 4]);
console.log(resultado); // Resultado: [3, 4]


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
