

let saludar= (nombre)=>{return `hola ${nombre}`};
console.log(saludar('Juan'));

// metodos numeros.
let num = 10.458796325478895;
console.log(num.toFixed(2));//redondea al numero requerido de digitos
console.log(num.toPrecision(6));//nos arroja el numero con la cantidad de digitos requerido
console.log(num.toString());
console.log(num.toExponential(2));
console.log(Math.round(num))
console.log(Math.ceil(num))
console.log(Math.floor(num))

let cadena="789456.789"
console.log(typeof(Number(cadena)))
console.log(parseInt(cadena))
console.log(parseFloat(cadena))
/*Tanto Number() como parseInt() se utilizan en JavaScript para convertir cadenas a números, pero tienen diferencias importantes:

Number()
    Propósito: Convertir una cadena completa a un número, ya sea entero o decimal.
    Manejo de decimales: Puede manejar números con decimales (por ejemplo, "3.14").
    Manejo de valores no numéricos: Si la cadena no representa un número válido (por ejemplo, "123abc"), devuelve NaN (Not a Number).
    Ejemplo:
    JavaScript

    Number("42");    // Resultado: 42 (número entero)
    Number("3.14");  // Resultado: 3.14 (número decimal)
    Number("abc");   // Resultado: NaN
parseInt()

    Propósito: Convertir la parte inicial de una cadena a un número entero. Ignora cualquier carácter no numérico que encuentre después del primer número.
    Manejo de decimales: Descarta la parte decimal de un número (por ejemplo, parseInt("3.14") devuelve 3).
    Manejo de valores no numéricos: Al igual que Number(), devuelve NaN si la cadena no comienza con un número válido.
    Base numérica (opcional): Puedes especificar la base numérica como segundo argumento (por ejemplo, parseInt("101", 2) interpreta "101" como un número binario y devuelve 5). Si no se especifica, asume base 10 (decimal).*/