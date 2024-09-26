

let miarreglo= [  ];

miarreglo.push("juan", "pedro", "luis", "maria", "jose", "laura", "lucia");
console.log(miarreglo);

let miarreglo2= [[],[],[],[],[],[],[]];

miarreglo2[0].push("juan", "pedro", "luis", "maria", "jose", "laura", "lucia");
miarreglo2[1].push("juan", "pedro", "luis", "maria", "jose", "laura", "lucia");
miarreglo2[2].push("juan", "pedro", "luis", "maria", "jose", "laura", "lucia");
miarreglo2[3].push("juan", "pedro", "luis", "maria", "jose", "laura", "lucia");
miarreglo2[4].push("juan", "pedro", "luis", "maria", "jose", "laura", "lucia");
miarreglo2[5].push("juan", "pedro", "luis", "maria", "jose", "laura", "lucia");
miarreglo2[6].push("juan", "pedro", "luis", "maria", "jose", "laura", "lucia");
console.log(miarreglo2);

let recorrido=miarreglo.forEach(i=>console.log(i))
console.log(miarreglo)
console.log(recorrido)