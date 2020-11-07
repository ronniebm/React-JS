// arrays in JS


// defining an empty array. 
const array = [];


// adding elements to the empty array with push() method.
array.push(1);
array.push(3);
array.push(5);


// using map with a function that multiplies by 3 every element in const
// 'array' variable, and then save the result in a new const 'array2' variable.
const array2 = array.map(function(index){
    return index * 3;
});


// printing both const arrays (array & array2)
console.log( array );
console.log( array2 );