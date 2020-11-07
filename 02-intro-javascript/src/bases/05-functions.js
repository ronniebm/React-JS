// Functions in JavaScript


// creating a greeting function, that receives a string argument.
const greeting = function( firstName ) {
    return `Hello, ${ firstName }`;
}


// arrow function without simplify & receiving a string argument.
const greeting2 = ( firstName ) => {
    return `Hello, ${ firstName }`;
}


// arrow function simplified & receiving a string argument.
const greeting3 = ( firstName ) => `Hello, ${ nombre }`;


// arrow function simplified & without receiving arguments.
const greeting4 = () => `Hello World...`;

// printing the functions outputs.
console.log( greeting('Ronnie') );
console.log( greeting2('Tony Stark !!!') );
console.log( greeting2('Goku !') );
console.log( greeting4() );


// To return an object from an arrow function, it should be inside parenthesis. 
const getUser = () => ({
    uid: 'ABC123',
    userName: 'Soy_Goku_01', 
});


// printing output from 'getUser' function.
console.log( getUser() );


// creating a function that returns a predefined user.
function getActiveUser2(firstName) {
    return {
        uid: 'ABC567',
        userName: firstName,
    }
};


// printing output from 'getActiveUser2' function.
const activeUser2 = getActiveUser2('Ronnie');
console.log( activeUser2 );


// converting 'getActiveUser2' function to an 'arrow function type' named
// 'getActiveUser'.
const getActiveUser = ( firstName ) => ({
    uid: 'ABC567',
    userName: firstName,
});


// printing output from 'getActiveUser' function.
console.log( getActiveUser('Steven') );
