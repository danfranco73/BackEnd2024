/* Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20.
Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados. */

let serie = {};

for(let i=0; i<10000;i++){
    let numero = Math.floor(Math.random()*20+1);
    if (serie[numero]){
        serie[numero]++;
    }else{
        serie[numero] = 1;
    }
}

console.log(serie);

// no es tan random por que no se puede generar un numero 0 y el 20 no se genera nunca por que el random es de 0 a 19