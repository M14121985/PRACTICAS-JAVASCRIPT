
 const sumar =(a ,b)=>{      //funcion flecha sintaxis () => {}
    return a+b;
 }

    const restar =(a ,b)=>{
    return a-b;       // no hace falta poner llaves ni return si es una sola linea
}

document.write(sumar(45,80))
document.write("<br>")
document.write(restar(45,80))

document.write("<br>")
 let saludar=(nombre)=>{
        return "hola "+nombre;
 }

    document.write(saludar("juan"))
    document.write("<br>")
    document.write(saludar("pedro"))
    document.write("<br>")
    document.write(saludar("luis"))