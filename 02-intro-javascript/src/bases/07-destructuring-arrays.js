// Destructuring arrays.

// creating an example array with DragonBall characters.
const people = ['Goku', 'Vegeta', 'Trunks'];
console.log( people );


// printing only the index position '0' from the previous array.
console.log( people[0] );


// destructuring an array, we let two empty positions separated by comma,
// to get the index position '3', which prints 'Trunks' character only.
const [ , , person ] = people;
console.log( person );


// creating a function that returns a predefined array.
const returnArray = () => {
    return ['ABC', 123];
}
console.log( returnArray() );


// here i'm destructuring the array content with my predefined 'const' 
// variables called 'characters' and 'numbers'.
const [characters, numbers] = returnArray();
console.log (characters, numbers);


// creating a function that returns an array containing a value and a function.
const userState = ( value ) => {
    return [ value, ()=>{console.log('Hello World')}];
}


// saving a new array generated by 'userState' function.
const arr = userState('Goku');
console.log(arr);


// this is how to execute the function stored in 
// the index position '1' of the 'arr' array.
// in console is displayed 'Hello World' message.
arr[1]();


// destructuring a returned array from userState function.
const [ firstName, setFirstName] = userState('Vegeta');
console.log(firstName);
setFirstName();