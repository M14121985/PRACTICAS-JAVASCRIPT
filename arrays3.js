

let array=["a","b","c","d"];
array.push(789,45,69,1,2,3);//añade al final
console.log(array);
array.unshift(0,1,2,3,4,5,6,7,8);//añade al inicio del array
console.log(array);

//metodo splice
//array.splice(inicio, cantidad de elementos a eliminar, elementos a añadir)

array.splice(2,0,"hola","mundo");//añade elementos en la posicion 2
console.log(array);
array.splice(0,0,"adios","chau");
console.log(array);
//forEach
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
  avionesDeCombate.forEach(function(indice,valor){console.log(indice, valor)});
  avionesDeCombate.forEach((i,v)=>{console.log(i, v)})
  //copiar arrays
  let array_copia= avionesDeCombate.slice()
console.log(array_copia);

//copyWhithin
let arrayCopia=array_copia.copyWithin(0,0);
console.log(arrayCopia);

let mi_array=[10,100,564,78200,7200];
let total=mi_array.reduce((total, valor_actual)=>total+valor_actual,0);
console.log(mi_array);
console.log(total);

let array2=[96,89,45,78,100];
let total2=array2.reduce((i, z)=> i + z, 0);//  donde i es el acumulador y z el valor actual del recorrido, 0 el valor de suma inicial
console.log(total2)



// arrow function

const hola = ()=>{return "hola mundo";}

console.log(hola());