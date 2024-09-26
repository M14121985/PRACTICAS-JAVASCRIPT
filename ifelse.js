/*
let edad = parseInt(prompt("¿Cuál es tu edad?"));
let nombre = prompt("¿Cuál es tu nombre?");

if (edad >= 18){
    document.write("Eres mayor de edad y tu nombre es, " + nombre + " tu edad es, " + edad + " años.");
}else if (edad < 18){
    document.write("Eres menor de edad y tu nombre es, " + nombre + " tu edad es, " + edad + " años.");
}else{
    document.write("Introduce un valor numérico");
}

*/
//ejercicio 2 or se escribe solo asi ||
/*
let edad2= parseInt(prompt("¿Cuál es tu edad?"));

if (edad2 == 18 || edad2 == 21 || edad2 == 30){
    document.write(`Felicidades por tus ${edad2} años.`);
}else{
    document.write("No has cumplido 18, 21 o 30 años.");
}

//ejercicio 3

let hora= parseInt(prompt("¿Qué hora es?"));

if (hora >= 6&& hora<=12){
    document.write("Buenos días.");

}else if (hora>=13 && hora<=19){
    document.write("Buenas tardes.");
}else {
    document.write("Buenas noches.");
}
*/


let contador=0;

while (contador<=100){
    document.write(contador, "<br>")
    contador++;

}
//se ejecuta al menos una vez
let contador1=1;
/*do while*/
//se ejecuta al menos una vez//

do{
    document.write(contador1, "<br>")
    contador1++;


}while (contador1<=1000);













