let matriz2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(matriz2D[1][2]); // Salida: 6 (fila 1, columna 2)
  
  // Iterar sobre las filas de la matriz
for (let i = 0; i < matriz2D.length; i++) {
   //iterar sobre columnas de la matriz
   for(let j=0; j < matriz2D[i].length; j++){
        console.table(matriz2D[i][j]);
        console.log(`elemento de la fila ${i}, columna ${j}=> ${matriz2D[i][j]}`)
   }

  }
  
  
  
  function cambiarvalor(parametro){
    parametro=500;
    return parametro;
  }

  let valor=150;
  console.log(cambiarvalor(valor));

  console.log(valor)