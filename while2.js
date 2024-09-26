
function buclewhile(numero){
    let i=0;
    let output = '';
    while(i<numero){
        output += i + '\n';
        i++;
    }
    output += '\n' + 'fin del bucle';
    return output;
}

console.log(buclewhile(2000));

//arrays

let miarray= new Array(50)
console.log(miarray);
let mi_array2=[];

mi_array2[0]= "juan";
mi_array2[1]= "pedro";
mi_array2[2]= "luis";
mi_array2[3]= "maria";
mi_array2[4]= "jose";
mi_array2[5]= "laura";
mi_array2[6]= "lucia";
mi_array2[7]= "juan";
mi_array2[8]= "pedro";
mi_array2[9]= "luis";
mi_array2[10]= "maria";
mi_array2[11]= "jose";
mi_array2[12]= "laura";
mi_array2[13]= "lucia";
mi_array2[14]= "juan";
console.log(mi_array2);

let opcion = Math.random() * 10000; // Genera un número aleatorio entre 0 (inclusive) y 1000 (exclusivo)
let numeroRedondeado = Math.floor(opcion); // Redondea el número aleatorio hacia abajo
console.log(numeroRedondeado); // Imprime el número aleatorio redondeado hacia abajo
