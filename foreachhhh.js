let objeto=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let miArray=[];
objeto.forEach((x)=>{
    miArray.push(x)
    
});
console.log(miArray);

// cipfer

// Creamos un objeto que mapea letras a códigos
const cipher = {
    a: 'α',
    b: 'β',
    c: '¢',
    d: 'Ð',
    e: '€',
    f: 'ƒ',
    g: 'ĝ',
    h: 'ĥ',
    i: 'î',
    j: 'ĵ',
    k: 'ķ',
    l: 'ĺ',
    m: 'м',
    n: 'ñ',
    o: 'ô',
    p: 'þ',
    q: 'ķ',
    r: 'ŗ',
    s: 'ŝ',
    t: 'ţ',
    u: 'û',
    v: 'ṽ',
    w: 'ẃ',
    x: 'ẋ',
    y: 'ÿ',
    z: 'ź',
    ' ': ' '
  };
  
  // Función que remplaza las letras de una palabra con los códigos del objeto
function encodeWord(word) {
    let encodedWord = '';
    for (let i = 0; i < word.length; i++) {
      const letra = word[i].toLowerCase();
      encodedWord += cipher[letra] || letra;// si el valor no se encuntra codificado en el objeto 'diccionario' se sustituyre por letter 
    }//accede por la letra que es la clave a l valor cipher[letra]
    return encodedWord;
  }
  
let resultado=encodeWord('que quieres que te diga');
console.log(resultado);

let numeros=[45,5,4,6,56,45,1223,4556,78,89];
let copiaArray= Array.from(numeros);
console.log(copiaArray);
let copia2= numeros.slice();
console.log(copia2);
let copia3= numeros.map((x)=>x);
console.log(copia3);
let copia4= structuredClone(numeros);
console.log(copia4);

let frutas= ['manzana', '¡fresa', 'piña', 'sandia', 'melon'];
let frutas2=frutas.slice();
console.log(frutas2);
let frutas3= Array.from(frutas);
console.log(frutas3);
let frutas4= frutas.map((i)=>{i});
let frutas5=structuredClone(frutas);
console.log(frutas5);
let aviones = [
  { id: 1, modelo: "Boeing 737", capacidad: 200 },
  { id: 2, modelo: "Airbus A320", capacidad: 220 },
  { id: 3, modelo: "Cessna 152", capacidad: 2 },
  { id: 4, modelo: "Boeing 787", capacidad: 300 },
  { id: 5, modelo: "Airbus A380", capacidad: 500 }
];

let aviones_copia1= Array.from(aviones);
console.log(aviones_copia1);
let aviones_copia2= aviones.slice();
console.log(aviones_copia2);
let aviones_copia3= aviones.map((i)=>{i});
console.log(aviones_copia3);  
let aviones_copia4=structuredClone(aviones);
console.log(aviones_copia4);
aviones.sort((a,b)=>{a-b});
console.log(aviones); 
//ejercicios bucles
let NumerosArray=[78,890,963,452,785,456,245,4555,40000];
let suma=0;

//sumamos con for
for(let i =0; i<NumerosArray.length;i++){
  suma+=NumerosArray[i];

};
console.log(suma);

//sumamos con reduce
let suma2=NumerosArray.reduce(function(x,i){return x+i},0);
console.log(suma2);
let suma3= NumerosArray.reduce((valorActual, valorTotal)=>valorActual+valorTotal,0);
console.log(suma3);

let arrayOrdenado= NumerosArray.sort((a,b)=> {return a-b});
console.log(arrayOrdenado);
let copiaNumerosArray= NumerosArray.map((i)=>{return i});
console.log(copiaNumerosArray);



// practica forEach() copiamos con forEach//

let numeross=[1,2,3,4,5,6,7,8,9,10];
let copiaNumeros=[];
numeross.forEach(function(i){return copiaNumeros.push(i)});
console.log(typeof copiaNumeros);
console.log(copiaNumeros)
//copiar con map

let copiaNumeros2=numeross.map((i)=>i);
console.log(copiaNumeros2);
console.log(typeof copiaNumeros2);
//practicas map
let nombres=['carla', 'juan', 'noa', 'pedro', 'iker', 'natalia', 'fernando', 'ana', 'lorena'];
let copiaNombres= nombres.map((i)=>{
  return i.toUpperCase()
});
console.log(copiaNombres);

//copia con forEach
let copiaNombres2=[];
nombres.forEach((i)=>{return copiaNombres2.push(i.toUpperCase())});
console.log(copiaNombres2); 
//OBJETOS METODOS

let objetoOriginal = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Gran Vía",
    numero: 123
  }
};
//copia con spread
let copiaObjeto={...objetoOriginal};
console.log(copiaObjeto);
let copiaObjeto2=Object.assign({},objetoOriginal);
console.log(copiaObjeto2);