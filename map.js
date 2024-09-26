

let numeros=[12, 24, 49,478, 95, 65, 47, 235, 4563, 56, 78,56];
// recorremos el array
numeros.forEach((i)=>{console.log(i)});
//ahora haremos una variable nueva modificando la anterior 
let numeros_dobles= numeros.map((i)=>{return i*2});
console.log(numeros_dobles);
let numeroscubo=[3, 6, 9, 12, 15, 18, 21,24,27];
let numeros_cubo=numeroscubo.map((indice)=>{return indice**3});
console.log(numeros_cubo);
//ahora solo lo recorremos
numeros_cubo.forEach((i, indice)=>{console.log(`el numero ${i} ocupa el indice dentro del array ${indice}`)});

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
  //vamos a recorrerlo
  for(i in persona){
    console.log(i, persona[i]);
  }
//con objet.entries
for (let i of Object.entries(persona)){
    console.log(i);
}


//con objet.keys solo nos da las llaves 

for (let i of Object.keys(persona)){
    console.log(i);
}