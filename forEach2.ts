



let carBrands = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroën",
    "Dacia",
    "Daewoo",
    "Daihatsu",
    "Dodge",
    "Donkervoort",
    "DS",
    "Ferrari",
    "Fiat",
    "Fisker"
  ];

  carBrands.forEach((indice,valor)=>{console.log(indice, valor)});
  carBrands.forEach(function(i,x){console.log(i,x)});
    for (let i in carBrands){
        console.log(i, carBrands[i]);
    }



//for 0 a 1000 decir si i es par

for(let i=0; i<=1000; i++){
  if(i%2===0){
    console.log(`${i} es numero par`);
  }else{
    console.log(`${i} es numero impar`);
  }
  console.log(i);
}

let x=0;
while(x<=4500){
  console.log(x);
  x++;  

}