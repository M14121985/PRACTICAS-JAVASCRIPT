let numeros= [15, 80, 450, 600, -87, 456, 456, 8900, "frutas", "verduras", "hortalizas"]
document.write(numeros) // 15,80,450,600,-87,456
document.write("<br>")
document.write(numeros[0])
document.write("<br>")
document.write(numeros[1])
document.write("<br>")
document.write(numeros[2])
document.write("<br>")
document.write(numeros[3])
document.write("<br>")
document.write(numeros[4])
document.write("<br>")
document.write(numeros[5])
document.write("<br>")
document.write(numeros[6]) // undefined
document.write("<br>")
document.write(numeros[7]) // undefined
document.write("<br>")
document.write(numeros.length)
//funciones arrays arrays funciones lista:
/*.length() cantidad de elementos
.push() agrega un elemento al final
.pop() elimina el ultimo elemento
.unshift() agrega un elemento al principio
.shift() elimina el primer elemento
.indexOf() busca un elemento
.join() une los elementos
.splice() elimina un elemento
.slice() copia un elemento
.concat() concatena elementos
.sort() ordena elementos
.reverse() invierte elementos
.map() mapea elementos
.filter() filtra elementos
.find() encuentra elementos
.reduce() reduce elementos
.forEach() recorre elementos
.some() algunos elementos
.every() todos los elementos
.includes() incluye elementos
.fill() llena elementos
.copyWithin() // copia elementos
.typeoff // object
// Path: arrays.js*/
document.write("<br>")
let copia_numeros= numeros.copyWithin()// copia elementos
document.write(copia_numeros)
document.write("<br>")
copia2=numeros.slice()// copia elementos
document.write(copia2)
numeros.push(1_00000_0000);// agrega elementos al final
document.write("<br>")
document.write(numeros)
document.write("<br>")
numeros.unshift(786, 456, 123, 789,777)// agrega elementos al principio
document.write(numeros)

let texto="esto es un string y lo convertire en array"
let array_texto=texto.split(" ")// convierte un string en array
document.write("<br>")
document.write(array_texto)
document.write("<br>")
document.write(array_texto.typeof)// object
document.write("<br>")
document.write(array_texto.length)// 45
document.write("<br>")
console.log(array_texto.typeof)
document.write(array_texto instanceof Array)// true nos dice si es un array instanceof es como isinstance en python 
document.write("<br>")
document.write(array_texto instanceof String)// false
document.write(array_texto.concat(numeros))
document.write("<br>")
document.write(array_texto)
console.log(array_texto)
let lista= numeros.pop()
alert(lista)