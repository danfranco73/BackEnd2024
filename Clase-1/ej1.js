/* let i=1;
function test(){
    console.log(i);
    i++;
}
test();
test();
test();
 */
// ejemplo de  scope: global

/* let e=1;
function test(){
    let e=1;
    console.log(e);
    e++;
}
test();
test();
 */
// ejemplo de  scope: local
/* 
let f=1;
function test(){
    console.log(f);
    f++;
}
test();
test();


// como se puede modificar el valor de una const
const a = 1;
console.log(a);
a = 2; // error
console.log(a); // no se ejecuta
// no se puede modificar el valor de una constante

// como se puede modificar el valor de una let
let b = 1;
console.log(b);
b = 2; // se ejecuta
console.log(b); // se ejecuta
 */

/* 
const texto="hola";
console.log(texto);
texto +="adios"; // error por que no se puede modificar el valor de una constante
console.log(texto); */

// ahora const con un array y lo modificamos
const array=[1,2,3];
console.log(array);
array.push(4); // se ejecuta
console.log({array}); // se ejecuta
console.log(array[3]); // se ejecuta
array[0]=0; // se ejecuta y modifica el valor de la constante
console.log(array); // se ejecuta
// modifico con un string
array[0]="hola"; // se ejecuta y modifica el valor de la constante
console.log(array); // se ejecuta


// saco el ultimo elemento
array.pop(); // se ejecuta
console.log(array); // se ejecuta

// saco el primer elemento
array.shift(); // se ejecuta
console.log(array); // se ejecuta
