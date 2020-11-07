
// Arreglos en JS

const arreglo = [];
arreglo.push(1);
arreglo.push(3);
arreglo.push(5);

const arreglo2 = arreglo.map(function(index){
    return index * 3;
});

console.log( arreglo );
console.log( arreglo2 )