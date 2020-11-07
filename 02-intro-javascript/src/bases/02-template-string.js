/* 
Title: Template/strings (Basics).
date: nov.06.2020.
*/

// declaring some 'const' variables.
const firstName = 'Ronnie';
const lastName = 'Barrios';

// learning string variables concatenation (JOIN).
const fullName = `${firstName} ${lastName}`;

// printing concatenated string stored in a new variable.
console.log(fullName);

// my very first JS function declaration receiving 'firstName' argument.
function getGreeting(firstName) {

    // defining the concatenated msg to be returned.
    return 'Hello ' + firstName;
}

// making a console.log with back ticks and embedding code with dollar sign '$' syntax. 
console.log(`This is a text: ${ getGreeting( firstName ) }`);