// Arrays in JavaScript
// an array is an info collection that is contained into a single variable.

// this will give us a warning: it's better to use '[]' syntax
// instead of this Array() syntax.
const array = new Array();
console.log(array);


// defining an array with 100 empty positions inside.
const array2 = new Array( 100 );
console.log( array2 );


// adding a new position to array2, now it has 101 positions (100 of them remains empty).
array2.push(1);
console.log( array2 );


// this is the usual form to create a new array, and adding elements to it with push.
const array3 = [];
array3.push(1);
array3.push(2);
array3.push(3);
console.log( array3 );

// NOTE: Adding elements to an array with push is not recommended, because it modifies
// the principal object, to insert something inside an array it is best practice to use
// the SPREAD operator.


// we can initialize an array during it's creation.
const array4 = [1,2,3,4];
console.log( array4 );

// creating a NEW array copying elements from 'array4' and adding a number 5.
// here we use the spread operator (3 dots ...<array-to-be-copyed>)
let array5 = [...array4, 5];
console.log( array4 );
console.log( array5 );


// creating a NEW array applying map function with doubled values of 'array5'
const array6 = array5.map( function(index) {
    return index * 2;
})
console.log( array5 );  
console.log( array6 );

// NOTE: an array has a prototype, and prototype means all those methods that 
// contains itself as an array JavaScript object type.
// 
// map() is one of the methods included in the JavaScript array prototype !.
//  ---> map() creates a NEW array with the results of the called function argument.
// check Mozilla MDN web docs to check all about javascript.



// NOTE: in JavaScript when a function doesn't have a explicit return, it will
// return you back an UNDEFINED value ! (remember this).