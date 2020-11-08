import { getHeroById3 } from './08-import-export';
// Learning about 'Promises' in JavaScript.
// *****************************************
// a promise are asynchronous execution by nature, that means that JavaScript
// executes the secuential code first (wich is synchronous execution), and after
// that, the promises results are evaluated.
//
// This is how to create a new promise, and this promise will receive a function as
// argument, this function is also called a 'call back'.
//
// the call-back inside the promise receives two args, the name for these it doesn't matter BUT
// it's almost a general convention to use words like 'resolve' and 'reject' within.

const promise = new Promise( (resolve, reject) => {

    // SetTimeout: is a javascript internal function that let us execute a task in some time,
    // and it receives a call back as argument.
    //
    // --- 1st argument: it's the call back, in this case a simple function printing a msg.
    // --- 2nd argument: it's the await time to complete the promess, specified in milliseconds.

    setTimeout( () => {
        console.log('2 seconds after'); // checking if ok.
        resolve(); // calling 'resolve' of the promise.
    }, 2000)
});

// if promess was correctly done, 'then' must be used.
promise.then( () => {
    console.log('"then" was executed as result of promess !')
})




// **************************************************

const promise2 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        const hero = getHeroById3(50);
        resolve( hero );
    }, 2000)
});

// if promess was correctly done, 'then' method must be used.
promise2.then( ( hero ) => {
    if (hero !== undefined){
        console.log('The hero is:', hero);
    } else {
        console.log('The hero can not be found !');
    }
})
.catch( err => console.warn( err ) );





// **************************************************

const getHeroByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        
        setTimeout( () => {
            const hero = getHeroById3( id );
            if ( hero ) {
                resolve ( hero );
            } else {
                reject ('hero not found !!!');
            }
        }, 2000)

    });
}

getHeroByIdAsync(44)
    .then( ( hero ) => console.log('Hero is:', hero ))
    .catch( (err) => console.warn( err ) )
    // line 78 works also the same with following symplified syntax,
    // because it will take the very first argument received by reject
    // method:
    //
    // .catch( console.warn )
    //
    // in the same way, this works with 'then' method (line 77), with following syntax:
    //
    // .then( console.log )
