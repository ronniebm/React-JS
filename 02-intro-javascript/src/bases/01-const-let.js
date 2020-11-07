/* Variables declaration practice
*/

// using 'const' keyword (according to ES6 standard).
const firstName = 'Ronnie';
const lastName = 'Barrios';

// using 'let' keyword for BLOCK SCOPE use purposes (according to ES6 standard).
let givenValue = 5;

// rewriting a previously declared variable (don't need to specify 'let' again).
givenValue = 4;

// testing example
if (true) {
    const firstName = 'Harry';
    console.log(firstName);
}

console.log(firstName, lastName, givenValue);