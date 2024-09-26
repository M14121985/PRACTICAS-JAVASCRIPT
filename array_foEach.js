let array=["cabra", "pato","tiburon","perro","leon", "frutas", "verduras"];

array.forEach((i)=>{console.log(i)})

//  con funcion normal
array.forEach(function(i){console.log(i)})
const frutas=["manzana","naranja","sandia", "melon", "fresa", "piña", "uvas"];


frutas.forEach((i)=>{console.log(i)});
frutas.forEach(function(i){console.log(i)});

const coches=["bmw", "ford", "fiat", "toyota", "nissan","mazda", "audi", "seat", "volkswagen", "skoda"];

coches.forEach((i, t)=>{console.log(i, t)});

coches.forEach(function(x, y){console.log(x, y)});


const verduras = [
    "Tomate",
    "Lechuga",
    "Cebolla",
    "Pepino",
    "Calabacín",
    "Zanahoria",
    "Brócoli",
    "Coliflor",
    "Esparrago",
    "Pimiento",
    "Champiñón",
    "Ajo",
    "Cebolla roja",
    "Rábano",
    "Apio",
    "Puerro",
    "Hinojo",
    "Espinaca",
    "Col rizada",
    "Berza"
  ];
verduras.forEach(function(j){console.log(j)});
verduras.forEach((i)=>{console.log(i)});

const avionesDeCombate = [
    "F-16 Fighting Falcon",
    "F-22 Raptor",
    "F-35 Lightning II",
    "Eurofighter Typhoon",
    "Dassault Rafale",
    "MiG-29 Fulcrum",
    "Su-35 Flanker-E",
    "A-10 Thunderbolt II",
    "F/A-18 Hornet",
    "Saab Gripen",
    "F-15 Eagle",
    "F-14 Tomcat",
    "MiG-25 Foxbat",
    "Su-27 Flanker",
    "F-4 Phantom II",
    "A-6 Intruder",
    "F-111 Aardvark",
    "B-2 Spirit",
    "F-117 Nighthawk",
    "X-35 Joint Strike Fighter"
  ];

  avionesDeCombate.forEach((indice, valor)=>{console.log(indice, valor)});
  avionesDeCombate.forEach(function(x, i){console.log(x, i)});
//con for in recorre indices
  for (let i in avionesDeCombate){
    console.log(i, avionesDeCombate[i]);
}


//con for of recorre los objetos
let indice=0;
for( i of avionesDeCombate){

    console.log(i, indice)
    indice++;
}

//con for

for(let y=0; y <avionesDeCombate.length; y++){
    console.log(avionesDeCombate[y], y);
}




  const coches_sovieticos=[
    "GAZ",
    "Lada",
    "ZIL",
    "Tatra",
    "Dacia",
    "Trabant",
    "Wartburg",
    "LuAZ",
    "AZLK",
    "ZAZ"
  ];

  coches_sovieticos.forEach(function(indice, valor){console.log(indice, valor)});
  //con flecha
  coches_sovieticos.forEach((indice, valor)=>{console.log(indice, valor)});