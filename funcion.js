function elegirColor() {
    var color = prompt("Elija un color: rojo, azul, verde, amarillo");
    switch(color){
        case "rojo":
            alert("el color que elegiste es el rojo y equivale a 1");
            break;

        case "azul":
            alert("el color que elegiste es el azul y equivale a 2");
            break;

        case "verde":
            alert("el color que elegiste es el verde y equivale a 3");
            break;

        case "amarillo":
            alert("el color que elegiste es el amarillo y equivale a 4");
            break;
        default:
            alert("Elegiste un color no válido.");
    }
}

elegirColor(); // Llama a la función para ejecutarla

var saludar= function(){
    alert("Hola mundo");
}
document.write(saludar());

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz[i].length; j++) {
      console.log("Elemento en la posición [" + i + "][" + j + "]: " + matriz[i][j]);
    }
  }
   let array=["hola","mundo","como","estas","hoy","manzana","pera","uva","platano","sandia"];

/*array.forEach(function(i,j){
    for(let j=0;j<i.length;j++){


})*/

for (let i = 0; i<array.length; i++) {
    console.log(`elemento numero ${i}:${array[i]}`);
}

//foreach
const carrito ={
    "televisor": 500,
    "celular": 1000,
    "computadora": 1500,
    "iphonexV":2000,
    "portatil victus": 2500,
}

let total=0;
for(let i in carrito){
    console.log(carrito[i]);
    total += carrito[i];
}
console.log("Total cost: " + total);