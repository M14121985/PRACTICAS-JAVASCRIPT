class Coche {
    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.encendido = false;
        this.velocidad = 0;
    }

      encender() {
        if (!this.encendido) {
            this.encendido = true;
            console.log("El coche está encendido.");
        } else {
            console.log("El coche ya está encendido.");
        }
    }

    apagar() {
        if (this.encendido) {
            this.encendido = false;
            this.velocidad = 0;
            console.log("El coche está apagado.");
        } else {
            console.log("El coche ya está apagado.");
        }
    }

    acelerar(velocidadIncremento) {
        if (this.encendido) {
            this.velocidad += velocidadIncremento;
            console.log(`El coche aceleró a ${this.velocidad} km/h.`);
        } else {
            console.log("No se puede acelerar, el coche está apagado.");
        }
    }

    frenar(velocidadDecremento) {
        if (this.encendido) {
            if (this.velocidad >= velocidadDecremento) {
                this.velocidad -= velocidadDecremento;
                console.log(`El coche frenó a ${this.velocidad} km/h.`);
            } else {
                this.velocidad = 0;
                console.log("El coche se detuvo.");
            }
        } else {
            console.log("No se puede frenar, el coche está apagado.");
        }
    }
}

class CocheElectrico extends Coche {///hereda de la clase Coche palabra resrevada extends
    constructor(marca, modelo, color, autonomia) {
        super(marca, modelo, color);//llama al constructor de la clase padre palabra resrevada super
        this.autonomia = autonomia;
    }

    cargarBateria() {//metodo propio de la clase CocheElectrico no se pone palabra resrevada function en ningun metodo de la clase
        console.log("La batería se está cargando.");

    }



}

// Ejemplo de uso:
const miCoche = new Coche("Toyota", "Corolla", "Rojo");
miCoche.encender();
miCoche.acelerar(50);
miCoche.frenar(20);
miCoche.apagar();
miCoche.velocidad = 100;
console.log(miCoche.velocidad);
////////////////////////////////////////////////////////////////////////////////////////////
const miCocheElectrico = new CocheElectrico("Tesla", "Model 3", "Blanco", 500);
miCocheElectrico.encender();
miCocheElectrico.acelerar(100);
miCocheElectrico.frenar(50);
miCocheElectrico.cargarBateria();
miCocheElectrico.autonomia= 600;
console.log(miCocheElectrico.autonomia);