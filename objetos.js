

const coche1 ={
marca: "mercedes",
modelo: "clase A",
color: "rojo",
precio: "65000 €",
potencia: "500cv",
acabado: "amg",

}

document.write(coche1.acabado + "<br>");
document.write(coche1.color + "<br>");  
document.write(coche1.marca + "<br>");
document.write(coche1.modelo + "<br>");
document.write(coche1.precio + "<br>");
document.write(coche1.potencia + "<br>");
document.write(coche1["acabado"]); // Otra forma de acceder a las propiedades de un objeto  //amg   //amg               
document.write(coche1["color"]); //rojo   //rojo
document.write(coche1["marca"]); //mercedes   //mercedes
document.write(coche1["modelo"]); //clase A   //clase A
document.write(coche1["precio"]); //35000 €   //35000 €
document.write(coche1["potencia"]); //500cv   //500cv
document.write(coche1["acabado"]); //amg   //amg
document.write(coche1["color"]); //rojo   //rojo
document.write(coche1["marca"]); //mercedes   //mercedes
document.write(coche1["modelo"]); //clase A   //clase A
