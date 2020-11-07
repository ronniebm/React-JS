// Destructuring in JS.

// defining a person object.
const person = {
    firstName: 'Tony',
    age: 45,
    pass: 'Ironman',
    uid: 'AXY568'
};

// this is the destructuring syntax.
const {firstName, age, pass} = person;

// printing the new 'const' variables derivated from previous destructuring code.
console.log( nombre, edad, clave);

// printing an specific key value from person object, using 'object.key' syntax. 
console.log( person.age );
console.log( persona.pass );


// defining a constant function that receives args and returns a new object with
// different variable names defined by the user.
//
// we can assing default values to avoid 'UNDEFINED' returns, example: uid = 'NOT REGISTERED'.
const usingContext = ( { pass, firstName, age, uid = 'NOT REGISTERED' } ) => {
    return {
        passData: pass,
        ageRetrieved: age,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

// this is an example of how to destructure annidated object's attributes,
// example: 'lat', 'lng', attributes inside latlng {} object.
const {passData, ageRetrieved, latlng:{lat, lng}} = usingContext( persona );

// printing the new const variables createad.
console.log(passData, ageRetrieved);
console.log(lat, lng);