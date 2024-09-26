

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
        console.log(i, carBrands[i]);}



//for 0 a 1000 decir si i es par

for(let i=0; i<=1000; i++){
  if(i%2===0){
    console.log(`${i} es numero par`);
  }else{
    console.log(`${i} es numero impar`);
  }
  console.log(i)
}


/*
let x=0;
while(x<=4500){
  console.log(x);
  x++;  

};
console.log(x);



//do while solo se ejcutara una vez, porque al analizar la condicion y no es mayor o igual a 450

let y=0;
do{console.log(y)
y++;

}while(y>=450);
*/
//forEach

let avionesComerciales = [
  "Airbus A320",
  "Airbus A330",
  "Airbus A350",
  "Airbus A380",
  "Boeing 737",
  "Boeing 747",
  "Boeing 757",
  "Boeing 767",
  "Boeing 777",
  "Boeing 787",
  "Antonov An-124",
  "Antonov An-225",
  "Bombardier CRJ",
  "Embraer ERJ",
  "McDonnell Douglas MD-80",
  "McDonnell Douglas MD-90"
];


avionesComerciales.forEach((i, v)=>{console.log(i, v)});
