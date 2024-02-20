/* Calculadora positiva de promesas
Se crearán un conjunto de funciones gestionadas por promesas y un entorno ASÍNCRONO  donde podremos ponerlas a prueba
Definir función suma:
Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea 0
En caso de que algún sumando sea 0, rechazar la promesa indicando “Operación innecesaria”.
En caso de que la suma sea negativa, rechazar la promesa indicando “La calculadora sólo debe devolver valores positivos
Definir función resta:
Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando “Operación inválida
En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando “La calculadora sólo puede devolver valores positivos”
Definir una función multiplicación:
Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo
Si el producto es negativo, rechazar la oferta indicando “La calculadora sólo puede devolver valores positivos
Definir la misma función división utilizada en esta clase.
Definir una función asíncrona “cálculos”, y realizar pruebas utilizando async/await y try/catch
 */

function suma(a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject("Operación innecesaria");
    } else {
      if (a + b < 0) {
        reject("[sumar] La calculadora sólo debe devolver valores positivos");
      } else {
        resolve(a + b);
      }
    }
  });
}

function resta(a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject("Operación inválida");
    } else if (a - b < 0) {
      reject("[Restar]La calculadora sólo puede devolver valores positivos");
    } else {
      resolve(a - b);
    }
  });
}

function multiplicacion(a, b) {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("[multiplicar] La calculadora sólo puede devolver valores positivos");
    } else {
      resolve(a * b);
    }
  });
}

function division(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("[division] No se puede dividir por 0");
    } else {
      resolve(a / b);
    }
  });
}

async function calculos(n1,n2) {
  try {
    const resultado = await suma(n1, n2);
    console.log(resultado);
    const resultado2 = await resta(n1, n2);
    console.log(resultado2);
    const resultado3 = await multiplicacion(n1, n2);
    console.log(resultado3);
    const resultado4 = await division(n1, n2);
    console.log(resultado4);
  } catch (error) {
    console.log(error);
  }
}

calculos(1,2);
