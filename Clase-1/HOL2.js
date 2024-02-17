// Se creará una clase que permitirá llevar cuentas individuales según cada responsable.

// Definir clase Contador
//La clase se creará con un nombre, representando al responsable del contador.
//El contador debe inicializarse en 0
//Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.
class Contador {
    // Propiedades
    static #contadoresTotales = 0; // Contador global de instancias
    #nombre; // Nombre del responsable
    #cuenta = 0; // Valor actual del contador
  
    // Constructor
    constructor(nombre) {
      this.#nombre = nombre;
      Contador.#contadoresTotales++;
    }
  
    // Métodos
    incrementar() {
      this.#cuenta++;
    }
  
    decrementar() {
      if (this.#cuenta > 0) {
        this.#cuenta--;
      }
    }
  
    obtenerCuenta() {
      return this.#cuenta;
    }
  
    obtenerNombre() {
      return this.#nombre;
    }
  
    // Método estático
    static obtenerContadoresTotales() {
      return Contador.#contadoresTotales;
    }
  }
  
  // Ejemplo de uso
  const contadorJuan = new Contador('Juan');
  const contadorMaria = new Contador('María');
  
  contadorJuan.incrementar();
  contadorJuan.incrementar();
  contadorMaria.incrementar();
  contadorMaria.decrementar();
  contadorJuan.incrementar();
  
  console.log(`Cuenta de Juan: ${contadorJuan.obtenerCuenta()}`); // Imprime "2"
  console.log(`Cuenta de María: ${contadorMaria.obtenerCuenta()}`); // Imprime "1"
  console.log(`Contadores totales: ${Contador.obtenerContadoresTotales()}`); // Imprime "2"
  