// funcion sumar con for

function sumar(...arg){
    let total=0
    for(let i=0; i<arg.length; i++){
        total += arg[i];
    }
    return total;
}

let resultado=sumar(78,7, 78, 900, 6, 5, 8, 4, 36,789);
console.log(resultado);


//con for in

function sumar1(...args){  
    let total=0
    for (let i in args){
    total += args[i]
}
return total

}

let resultado2=sumar1(78,7, 78, 900, 6, 5, 8, 4, 36,789,45000);
console.log(resultado2);


// con for of
function sumar2(...args){
    let total=0, i
    for (i of args){
        total+=i
    }
return(`el total de la suma es ${total}`)

}







let respuesta=sumar2(789456,6,10000,20000,30000,500000) 
console.log(respuesta)
document.write("<br>")




/// sumar con metodo .reduce((acumulador, valor_actual)=>acumulador+valor_actual,0)


const sumar300 = [45, 52, 78, 96, 36, 96, 45, 78, 32];
let resultado_total65 = sumar300.reduce((x, i) => x + i, 100);// donde x es acumulador, i valor actual del elemento a recorrer

console.log(resultado_total65); // Output: 558


//prueba do while
let contador=1

do{
    document.write(contador)
    document.write("<br>")
    document.write("<br>")
    contador++

}while(contador<0)
document.write("fin del bucle, el valor de contador ahora es","<br>",contador)
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")















let i = 0

do{

    document.write(i, "<br>")
    i++;


}while(i<=350)
document.write("fin del bucle")
document.write("<br>")


//recorremos elementos del array

let h=0;

let array= ["chanchito","wolkswang","dinosaurio", "tobi"];

while(h < array.length){
    document.write(array[h], "<br>");
    h++;
}


//bucle con break
//bucle con continue
let k = 0; 

while (k < 450) { 
     k++; 
    if (k === 86) {  
        continue;    
    }
    console.log(k, "<br>"); // Print before incrementing
             // Increment the counter at the end
}
  // switch
  let dia=parseInt(prompt("ingresa un numero del 1 al 7, que indique el dia de la semana: "))
  switch(dia){
        case 1:
            alert("lunes");
            break;
        case 2:
            alert("martes");
            break;

        case 3:
            alert("miercoles");
            break;

        case 4:
            alert("jueves");
            break;

        case 5:
            alert("viernes");
            break;

        case 6:
            alert("sabado");
            break;

        case 7:
            alert("domingo");
            break;  

        default:
            alert("no es un dia de la semana");
            break;






  }