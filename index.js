/* Variables  - Funciones - Condicionales - Loops */
const matriz = [ -2, 2, 2, -4, 4, 4, -3, 3, 3, 6, -6, -6 ]
const matriz2 = [ 2, 2, 2, 4, 4, 4, 3, 3, 3, 6, 6, 6 ]
const string_matriz = ['hola', 'algo', 'js', 'python']

/* Ejericio 1
Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, 
por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
*/


/* Solucion Imperativa */
function bigNum( x ){
  for(let i = 0; i < x.length; i++){
    if(x[i] > 0){
      x[i] = 'big'
    }
  }
  return x
}

/* Solucion Declarativa */
/*  const bigNum = ( x ) => {
  return x.map(d => (d > 0 ? 'big' : d))
}  */


/* Solucion Beta */
/* const bigNum = ( x ) => {
  const data = [ ]
  x.map(d => {
    d > 0 ? data.push('big') : data.push(d)
  })
  return data
} */

//console.table( bigNum(matriz) )
/* Ejericio 2
Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) 
el menor valor del array, y devolver (return) el mayor. 
*/

/* Solucion Imperativa */
const printReturn = (x) => {
  let max = 0;
  for(let i = 0; i < x.length; i ++){
    let min = x[i];
    if(x[i] < min){
      min = x[i]
    }
    if(x[i] > max){
      max = x[i]
    }
  }
  console.log({ min })
  return { max }
}

//console.log( printReturn(matriz2) )

// recorrer una lista 
// definir el minimo y el maximo inicial y donde definirlo
// determinar el minimo y maximo

              /*0   1   2  3  4  */ /* este es el index la posicion*/
const lista = [10, 5, 30, 1, 5]
              /*1   2   3  4  5*/ /* este es largo */


/* const GLOBAL = {
  min: function(x){
    let min = x[0]
    for(let i = 0; i < x.length; i++){
      /*  */
/*         if (x[i] < min) {
          min = x[i] //execute this 
        }
      }
      return { min }
  } */



const GLOBAL = {
  min: function(array){
    this.min = array[0]
    for(let i = 0; i < array.length; i++){
      if(array[i] < this.min){
        this.min = array[i]
      }
    }
    return { min : this.min}
  },
  max : function(){
    this.max = null
  }
}
//console.log( minimo(lista) )


//console.log(GLOBAL.min([10,6,2,15]))



/**
 * 
 * @param { Array<[]> }  
 * @returns { number } 
 */

function minMax_(lista){
  console.log({ max: Math.max(...lista) })
  return { min: Math.min(...lista) }
}

//spread


let user = {
  rut: '',
  pais: '',
  name: '',
  email: ''
}



user = {
  ...user,
  email: 'juanito'
}

console.log(user)
//console.log( minMax([5,4,1,2,8]) )







/* Solucion Declarativa beta */
function minMax(matriz){
  const min = Math.min(...matriz)
  const max = Math.max(...matriz)
  console.log( { min } )
  return { max }
}



/* Solucion Reduce */
function minMaxReduce(matriz){
  const min = matriz.reduce((acc, curr) => ( acc < curr ? acc : curr))
  const max = matriz.reduce((acc, curr) => ( acc > curr ? acc : curr))
  console.log({ min })
  return { max }
}

function minMax_(matriz){
  console.log({ max: Math.max(...matriz) })
  return { min: Math.min(...matriz) }
}

//console.log(printReturn(matriz))
//console.log(minMax(matriz))
//console.log(minMaxReduce(matriz))
//console.log(minMax_(matriz))

/* Ejericio 3
Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) 
el penúltimo valor y devolver (return) el primer valor impar. */

function lastDigit( matriz ){
  console.log({ penultimo: matriz[matriz.length - 2] })
  const filtered = matriz.filter(m => m%2 === 0)
  return { primer_par: filtered[0] }
}


//console.log(lastDigit(matriz))
/* Ejericio 4 
Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, 
doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. */

function double(matriz){
  return matriz.map(x => x*2)
}

//console.table(double(matriz))
/* Ejericio 5 
Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con 
el número de valores 
positivos encontrados en el array. Ejemplo, 
contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].*/


function contarPositivos(matriz){
  const count = matriz.filter(x => x > 0)
  const new_arr = matriz.map(x => x === matriz[matriz.length - 1] ? count.length : x )
  return { new_arr }

}

//console.log(  contarPositivos( matriz) )

/* Ejercicio 6
Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos,
 imprime (print) “¡Qué imparcial!”,
 y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”. */


function prinPar(x){
  let par = 0;
  let impar = 0;
  for(let i = 0; i <= x.length; i++){
    if(par === 3){
      console.log('¡Es para bien!')
      par = 0
    }
    if(impar === 3){
      console.log('¡Que imparcial!')
      impar = 0
    }
    x[i]%2 === 0 ? par++ : '' 
    x[i]%2 !== 0 ? impar++ : '' 
  }
}


//console.log( prinPar(matriz2) )
 /* Ejercicio 7
 Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, específicamente 
 a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). 
 Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr. 
 */


  function sumImpar(matriz){
    const new_arr = []
    matriz.map((x, idx) => {
      console.log(x)
      idx%2 !== 0 ? new_arr.push(x + 1) : new_arr.push(x)
    })
    return new_arr
  }

 //console.log(sumImpar(matriz2))
 /* Ejercicio 8 
 Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’)
 que contiene strings, 
 reemplaza cada string con un número de acuerdo cantidad de letras (longitud) 
 del string anterior. Por ejemplo, 
 longitudesPrevias([“programar”,“dojo”, “genial”]) 
 debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
 */


 function stringLargo(matriz){
   return matriz.map((x, idx) => idx != 0 ? matriz[idx - 1].length : x)
 }


// console.log(stringLargo(string_matriz))


/* Ejercicio 9 
Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array 
con todos los valores del original,
 pero sumando 7 a cada uno. No alteres el array original. 
Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
*/
const new_ = [1,2,3,4,5,6]
function plus7(matriz){
  return matriz.map(n => n + 7)
}

//console.log(plus7(new_))

/* Ejercicio 10
Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. 
Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
*/

function trade(matriz){
  return matriz.map(( n, idx ) => matriz[matriz.length - 1 - idx])
}

function tradeImperativo(matriz){
  const new_matriz = []
  for(let i = 0; i < matriz.length; i++){
    new_matriz.push(matriz[matriz.length - 1 - i])
  }
  return new_matriz
}


const data = [ 1 , 2 , 3 , 4 , 5 , -6, -2, -10, 12, -100, 15, -1000]

//console.log(trade(new_))
//console.log(tradeImperativo(new_))