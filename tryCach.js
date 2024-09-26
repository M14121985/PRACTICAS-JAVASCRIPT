/*try{

console.log("esto se ve antes del error");
x 5;
console.log(x);
console.log("esto se ve después del error");


}
catch (e){
    console.log("hubo un error");
    console.log(e);

}*/

let number = "w";

try {
  if (isNaN(number)) {
    throw new Error("******NO ES UN NUMERO*****");
  }
  console.log("es un número");
} catch (error) {
  console.log("hubo un error");
  console.log(error);
}