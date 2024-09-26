

let x=0
while (x<2000){
    x++;
    console.log(x);
    document.write(x);
    document.write("<br>");
}


for (let i=0; i<500; i++){
    console.log(i);
    document.write(i);
    document.write("<br>");
}

let p= 10;

do{
    console.log(p);
    document.write(p);
    document.write("<br>");
    p++;
}while(p<36);

var numero1 = parseInt(prompt("Ingrese un valor")); // Convierte la cadena a un entero
var numero2 = Number(prompt("Ingrese un valor2")); // Convierte el valor a un número, no solo la cadena



let array= [1,2,3,4,5,6,7,8,9,10,"hola", "adios", "hasta luego",
    "nos vemos", "hasta pronto", "hasta mañana",
    "hasta nunca", "hasta siempre"
];
let listavacia= [];
for (let i=0; i< array.length; i++){
    //listavacia.push(array[i], "<br>"); //agrega los elementos al array
    listavacia+= array[i] + "<br>";//agrega los elementos al array de forma mas sencilla
}

console.log(listavacia, "<br>");
document.write(listavacia, "<br>");

 array+=["juan", "pedro", "luis", "maria", "jose", "laura", "lucia"]
console.log(array);//agrega los elementos al array
