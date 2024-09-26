

//recorrer objeto
const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    genero: "Masculino",
    direccion: "Calle 123, Ciudad",
    telefono: "555-1234",
    correo: "juanperez@example.com",
    ocupacion: "Ingeniero",
    hobbies: ["leer", "deportes", "viajar"],
    nacionalidad: "Mexicana"
  };

  let personaArray=[];
  //vamos a recorrerlo
  for(i in persona){
    personaArray.push(i, persona[i]);
    console.log(i, persona[i]);
  }
  console.log(personaArray);

  let personaArray1=[];
  //con objet.entries
for ([clave, valor]of Object.entries(persona)){
    console.log(clave, valor)
    personaArray1.push(clave, valor);
}
console.log(personaArray1)




let personaArray2=[];
for (i of Object.entries(persona)){
    personaArray2.push(i)
    console.log(i)
};
console.log(personaArray2);











// otro ejemplo
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "Blanco",
    tipo: "Sedán",
    puertas: 4,
    motor: "1.8L",
    transmision: "Automática",
    kilometraje: 5000,
    precio: 25000
  };

  for ([clave, valor] of Object.entries(coche)){
    console.log(clave, valor)

  }
for (i in coche){
    console.log(i, coche[i])
}


let array_coche=[];
// solo con for in
for(i in coche){
    array_coche.push(i, coche[i])
    console.log(i, coche[i])
}
console.log(array_coche);
///////////////////////////////////////
// con object.entries

const avionComercial = {
    marca: "Boeing",
    modelo: "737 MAX",
    año: 2020,
    capacidad: 200,
    velocidadCrucero: 915,
    autonomia: 5500,
    longitud: 39.5,
    envergadura: 35.8,
    altura: 12.5,
    pesoMaximo: 44300
  };


let avionComercialArray=[];
// de esta forma me separa cada clave valor en arrays dentro de un array
  for (i of Object.entries(avionComercial)){
    avionComercialArray.push(i)
    console.log(i)

  }
  
  console.log(avionComercialArray);





    // de esta forma me separa cada clave valor dentro de un unico array
let aviones=[];

for ([clave, valor]of Object.entries(avionComercial)){
    aviones.push(clave, valor)
    console.log(clave, valor)

}
console.log(aviones);