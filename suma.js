let numeros= [487,4,5,6,7,98,100,365,45698];
let suma=0;


for (let i=0; i<numeros.length; i++){
    suma+=numeros[i];
}

console.log(suma)


const numeros2 = [1, 2, 3, 4789];
const suma2 = numeros2.reduce((acumulador, valorActual) => acumulador + valorActual, 0); // 0 es el valor inicial del acumulador
console.log(suma2); 


let numeros3=[900,900,900,900,900,900,900,900,900,900]
const sum3= numeros.reduce(function (acumulador, valorActual){ return acumulador +valorActual}, 0);
console.log(sum3);  

let numeros4=[1,2,3,4,5,6,7,8,9,10788, 88888, 8154, 68547]
const suma4= numeros4.reduce((acumulador, valorActual)=>acumulador+valorActual,0);
console.log(suma4);

let numeros5=[700, 800, 900, 700, 745, 950, 698, 784, 235, 654, 9000, 4567, 5600];
const suma5= numeros5.reduce((acumulador, valorActual)=> acumulador+valorActual, 0);
console.log(suma5); 