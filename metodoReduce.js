


/// sumar con metodo .reduce((acumulador, valor_actual)=>acumulador+valor_actual,0)


const sumar300 = [45, 52, 78, 96, 36, 96, 45, 78, 32];
let resultado_total65 = sumar300.reduce((x, i) => x + i, 0);// donde x es acumulador, i valor actual del elemento a recorrer, el 0 es el valor inicial

console.log(resultado_total65); // Output: 558


//prueba do while
let contador2=1

do{
    console.log(contador2)
    document.write("<br>")
    document.write("<br>")
    contador2++

}while(contador2<0)
document.write("fin del bucle, el valor de contador ahora es","<br>",contador)
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")


//suma numeros

function sumar(...numerosLista){

let total=0;
let i;

    for(i in numerosLista){
        total+=numerosLista[i]
    }
return total

};
const numeros=[1,2,3,4,5,6,7,8,9,10];
let respuesta=sumar(numeros)
console.log(respuesta)

//template strings 
//hola mi nombre
// es 
 //gonzalo
 
 const saludo= `hola mi nombre
 es 
 gonzalo
 
 `
console.log(saludo)