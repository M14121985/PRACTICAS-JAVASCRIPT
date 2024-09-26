

const miObjeto = {
    nombre: "Calculadora",
    sumar: function(a, b) {
      return a + b;
    },
    restar: function(a, b) {
      return a - b;
    }
  };
  
  let resultadoSuma = miObjeto.sumar(55, 3); // Llamamos a la función sumar
  console.log(resultadoSuma); 
  
  let resultadoResta = miObjeto.restar(1057, 4); // Llamamos a la función restar
  console.log(resultadoResta); 
  
  //añadir funcion al objeto

  miObjeto.multiplicar=function(a, b){
    return a * b;
  }
    let resultadoMultiplicacion = miObjeto.multiplicar(5, 5); // Llamamos a la función multiplicar
    console.log(resultadoMultiplicacion);
    console.table(miObjeto)


    let miObjeto2={
        dividir:function(a, b){ return a / b; },
    
        elevar:function(a, b){return a ** b; },
        
        porcentaje: function(a, b){
          if (b !== 0) {
            return a / (1 + (b / 100));
          } else {
            return "Error: Division by zero";
          }
        }

    };

    let objetoConjunto={...miObjeto, ...miObjeto2};
    console.table(objetoConjunto);
    console.log(objetoConjunto.dividir(10, 2));
    console.log(objetoConjunto.elevar(2,2));
    console.log(objetoConjunto.porcentaje(200,20));

    //arrow function
let numerosArray=[45,800,800,950,950,600, 100, 10000];

let suma45=(...args)=>{return args.reduce((acumulador, valorActual)=>acumulador+valorActual, 0)};

console.log(suma45(...numerosArray));