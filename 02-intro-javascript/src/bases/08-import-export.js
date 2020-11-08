// Import, export, practice.
// --------------------------
// This is my first import, i'm importing an array from file 'heroes.js'
// specifying the relative position to access it. 

import { heroes } from '../data/heroes';


// printing heroes object to check that the import was successfully done.
console.log( heroes );


// *** Using find METHOD implicity contained in JavaScript array's prototype***
// ****************************************************************************
//
// creating a function that will search which of objects inside 
// the 'heroes' array has a given id value, and once localized,
// it will return that object.
// This function is longer, but it works!

const getHeroById1 = (id) => {
    return heroes.find( (hero) => {
        if (hero.id === id) {
            return true;
        } else {
            return false;
        }
    });
}

// testing the 'getHeroById1' function.
console.log( getHeroById1(2) ); // { id: 2, name: "Spiderman", owner: "Marvel" }



// -----------------------------------------------------------------------------
//
// Simplifying 'getHeroById1' function into a NEW function called 'getHeroById2'.

const getHeroById2 = (id) => {
    return heroes.find( ( hero ) => hero.id === id);
}


// testing the NEW simplified 'getHeroById2' function.
console.log( getHeroById2(2) ); // { id: 2, name: "Spiderman", owner: "Marvel" }




// -----------------------------------------------------------------------------
//
// Simplifying 'getHeroById2' function into a NEW function called 'getHeroById3'.

export const getHeroById3 = (id) => heroes.find( ( hero ) => hero.id === id);


// testing the NEW simplified 'getHeroById3' function.
console.log( getHeroById3(2) ); // { id: 2, name: "Spiderman", owner: "Marvel" }



// *** Using filter METHOD implicity contained in JavaScript array's prototype***
// ******************************************************************************
//
// Let's create another function, to search by ownwer attribute
// inside the imported 'heroes' object's array.

export const getHeroByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner);

// testing the NEW 'getHeroByOwner' function.
console.log( getHeroByOwner('DC') ); // [ {…}, {…}, {…} ]
