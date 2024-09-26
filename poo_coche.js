

class Coche {
    constructor(marca, modelo, año, color, precio, potencia) {
      this.__marca = marca;
      this.modelo = modelo;
      this.año = año;
      this.color = color;
      this.precio=precio;
      this.potencia=potencia;
      this.arrancado = false;
    }
  
    arrancar() {
      this.arrancado = true;
      console.log("El coche ha arrancado.");
    }
  
    parar() {
      this.arrancado = false;
      console.log("El coche se ha detenido.");
    }
  
    obtener_descripcion() { // Método similar a Python
      return `${this.__marca} ${this.modelo} (${this.año}, precio: ${this.precio}, tiene un motor con una potencia de ${this.potencia} cv, el motor esta encendido: ${this.arrancado})`;
    }  
    
    //metodo parta obtener marca
    get nombre_marca(){
      return this.__marca
    }
  
    //metodo para cambiar marca
    set nombre_marca(nueva_marca){

      this.__marca=nueva_marca

    }







  //metodo static de la clase (no necesita instancia para llamrlo se llama nombre de la clase.metodo)
  //constructor de coches

  
    static crearCochePersonalizado(marca, modelo, año, color, precio, potencia) {
      // Validación básica de datos (puedes agregar más validaciones según tus necesidades)
        if (typeof año !== 'number' || año < 1900 || año > new Date().getFullYear()) {
          throw new Error("Año inválido. Debe ser un número entre 1900 y el año actual.");
      }
  
        if (typeof precio !== 'number' || precio < 0) {
          throw new Error("Precio inválido. Debe ser un número positivo.");
      }
  
      // Crear el objeto Coche con los datos proporcionados
          return new Coche(marca, modelo, año, color, precio, potencia);
    }
  }
  
  // Ejemplo de uso:
  let miCochePersonalizado = Coche.crearCochePersonalizado("Ford", "Mustang", 2024, "Azul", 45000, 350);
  console.log(miCochePersonalizado.obtener_descripcion())






//SUBCLASE
//class CocheElectrico

class Coche_electrico extends Coche{
constructor(marca, modelo, año, color, precio, potencia, bateria, autonomia){
  super(marca, modelo, año, color, precio, potencia);
  this.bateria=bateria;
  this.autonomia=autonomia;
}
//metodo descripcion vehiculo.
obtener_descripcion() { // Método similar a Python
  return `${this.__marca} ${this.modelo} (${this.año}, precio: ${this.precio}, tiene un motor con una potencia de ${this.potencia} cv, el motor esta encendido: ${this.arrancado}\n` +
  `${this.bateria}, ${this.autonomia}`;
}  
}





  // Crear un objeto INSTANCIAMOS
  const mi_coche = new Coche("Tesla", "Model S", 2024, "rojo","59000€", "350");
  const coche_electrico = new Coche_electrico("litio","700km","tesla", "s", "2024", "black", "80.000€", "600cv")
  
  // Llamar a métodos
  mi_coche.arrancar();
  console.log(mi_coche.obtener_descripcion()); 
  console.log(mi_coche.__marca)//no existe metodos o atributos privados como tal se usa por convencion
  console.log(mi_coche.nombre_marca)
  mi_coche.nombre_marca="kia";
  console.log(mi_coche.nombre_marca)
  console.log(mi_coche.nombre_marca)
  console.log(mi_coche.obtener_descripcion());

  //electrico
  coche_electrico.arrancar();
  console.log(coche_electrico.obtener_descripcion());
  console.log(coche_electrico.__marca)//no existe metodos o atributos privados como tal se usa por convencion
  

