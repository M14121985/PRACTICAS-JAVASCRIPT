class Vehiculo { // Clase padre
    constructor(marca) {
      this.marca = marca;
    }
  
    arrancar() {
      console.log(`${this.marca} ha arrancado.`);
    }
  }
  
  class Coche extends Vehiculo { // Clase hija
    constructor(marca, modelo) {
      super(marca); // Llama al constructor de la clase padre
      this.modelo = modelo;
    }
  

    // overrride del metodo arracar con super
    arrancar() {
      super.arrancar(); // Llama al método arrancar de la clase padre
      console.log(`${this.marca} ${this.modelo} está en movimiento.`);
    }
  }
  
  let miCoche = new Coche("Toyota", "Corolla");
  miCoche.arrancar(); // Salida: Toyota ha arrancado. Toyota Corolla está en movimiento.
  