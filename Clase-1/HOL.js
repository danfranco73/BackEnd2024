// declaro una funcion que corrobore elementos de una lista
// funcion mostrarLista
const lista = [1,2,3,4,5,6,7,8,9,10];

function mostrarLista(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}

mostrarLista(lista);

/* //Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la longitud de la lista (Utilizar template strings)
Invocar la función con los casos de prueba. */
/* 
const lista2 = [];
const lista3 = [1,2,3,4,5,6,7,8,9,10];
const lista4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function mostrarLista2(lista2) {
    if (lista2.length === 0) {
        console.log("Lista vacía");
    } else {
        for (let i = 0; i < lista2.length; i++) {
            console.log(lista2[i]);
        }
    }
    console.log(`La longitud de la lista es ${lista2.length}`);
}

mostrarLista2(lista2);
mostrarLista2(lista3);
mostrarLista2(lista4);
 */

// uso el for each
const lista5 = [1,2,3,4,5,6,7,8,9,10];

function mostrarLista3(lista5) {
    if (lista5.length === 0) {
        console.log("Lista vacía");
    } else {
        lista5.forEach(element => {
            console.log(element);
        });
    }
    console.log(`La longitud de la lista es ${lista5.length}`);
}