//bucle for
let contador= 0;
let i =0;
let frutas= ["manzana", "pera", "uva", "sandia", "melon", "platano", "kiwi", "fresa", "naranja", "mango"];
for (i=0; i<frutas.length; i++){
    contador++;
    document.write("<br>")
    document.write("la fruta numero:"+" " +contador+" " +frutas[i])
    console.log("la fruta numero:"+" " +contador+" " +frutas[i])
    document.write("<br>")
}

document.write("<br>")
//for in prar recorrer objetos

let palabra= "hola como estas, hello javascript";
let contador2= 0;

for (i in palabra){
    contador2++;
    document.write("la letra numero:"+" " +contador2+" " +palabra[i])
    console.log("la letra numero:"+" " +contador2+" " +palabra[i])
    document.write("<br>")
}
document.write("<br>")

//for of para recorrer arreglos
let palabra2= "javascript";
let resultado= "";  //variable vacia

for (let i in palabra2){
    if (palabra2[i]=== "a" ){
        continue; //salta la letra a

    }else{
        resultado += palabra2[i]; //concatenar
    }
}
document.write("final del bucle: "+resultado);
console.log(resultado);
console.log("=========================================================================================================")
document.write("<br>")
document.write("=========================================================================================================")
let arreglo1= ["banana", "manzana", "pera", "uva", "sandia", "melon", "platano", "kiwi", "fresa", "naranja", "mango"];
let contador1    = 1;
let  i5 =0;
for(i5=0;i5<arreglo1.length;i5+=1){
    document.write("elemento numero"+" "+contador1+" "+ arreglo1[i5]);
    console.log("elemento numero"+" "+contador1+" "+ arreglo1[i5]);
    contador1++;
}