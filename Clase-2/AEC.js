// Dados los objetos indicados en la siguiente diapositiva:
//Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
//Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)

const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
];

const lista = [];

for (const objeto of objetos) {
	const keys = Object.keys(objeto);
	for (const key of keys) {
		if (!lista.includes(key)) {
			lista.push(key);
		}
	}
}
console.log(lista);

const total = objetos.reduce((acc, objeto) => {
	const values = Object.values(objeto);
	for (const value of values) {
		acc += value;
	}
	return acc;
}, 0);

console.log(total);

// calculo el total por producto

const totalPorProducto = objetos.reduce((acc, objeto) => {
	const keys = Object.keys(objeto);
	for (const key of keys) {
		if (!acc[key]) {
			acc[key] = 0;
		}
		acc[key] += objeto[key];
	}
	return acc;
}, {});

console.log(totalPorProducto);