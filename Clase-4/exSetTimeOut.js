// ejemplo set time out
setTimeout(() => {
    console.log('Hola Mundo');
}
, 2000);

// ejemplo set interval
let contador = 0;
let intervalo = setInterval(() => {
    console.log(contador);
    contador++;
    if (contador === 5) {
        clearInterval(intervalo);
        console.log('fin del intervalo');
    }
}, 1000);


