// ejemplo de class
class Test {
  constructor() {
    this.e = 1;
  }

  test2() {
    console.log(this.e);
    this.e++;
  }

}

const test = new Test();
test.test2();
test.test2();
test.test2();

// class de personas
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  mostrarNombre() {
    console.log(this.nombre);
  }

  mostrarEdad() {
    console.log(this.edad);
  }

}

const persona = new Persona("John", 25);
persona.mostrarNombre();
persona.mostrarEdad();
const persona2 = new Persona("Jane", 30);
persona2.mostrarNombre();
console.log(persona2.mostrarEdad());