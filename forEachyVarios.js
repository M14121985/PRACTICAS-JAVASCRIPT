


let x=0;
while(x<=45){
  console.log(x);
  x++;  

};
console.log(x);



//do while solo se ejcutara una vez, porque al analizar la condicion y no es mayor o igual a 450

let y=0;
do{console.log(y)
y++;

}while(y>=450)

//forEach

let avionesComerciales = [
    "Airbus A320",
    "Airbus A330",
    "Airbus A350",
    "Airbus A380",
    "Boeing 737",
    "Boeing 747",
    "Boeing 757",
    "Boeing 767",
    "Boeing 777",
    "Boeing 787",
    "Antonov An-124",
    "Antonov An-225",
    "Bombardier CRJ",
    "Embraer ERJ",
    "McDonnell Douglas MD-80",
    "McDonnell Douglas MD-90"
  ];
  
  
  avionesComerciales.forEach((i, v)=>{console.log(i, v)});

  avionesComerciales.forEach((indice, valor)=>{console.log(indice, valor)});

  avionesComerciales.forEach(function(g, t){console.log(g, t)});

  for(let z=0; z<avionesComerciales.length; z++){
    console.log(z, avionesComerciales[z]);

  }

  // creo nuevo arreglo con map crea un nuevo arreglo forEach solo recorre los elementos del array


  let nuevoArregloAviones;
  
  nuevoArregloAviones = avionesComerciales.map((indice, i) => {
    return [indice, i ];
  });

console.log(nuevoArregloAviones);

let nuevoArregloAviones2= avionesComerciales.map(function(x, y){return[ x, y]});
console.log(nuevoArregloAviones2);


//PRUEBAS THIS EN LOS OBJETOS

let persona = {
  nombre: "Juan Pérez",
  apellido: "González",
  edad: 30,
  direccion: {
    calle: "Calle Principal",
    numero: 123,
    ciudad: "Madrid",
    pais: "España"
  },
  telefono: "912 345 678",
  email: "juan.perez@example.com",
  ocupacion: "Desarrollador de software",
  hobbies: ["programar", "leer", "viajar"],
  informacion: function(){
    console.log(this.nombre, this.apellido, this.edad, this.telefono, this.email, this.ocupacion);
  }
};


persona.informacion();