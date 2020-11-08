// Working with API fetch.

// 1. i've created an account with https://developers.giphy.com/
// 2. i've created a new App named 'React-App-Practice'
// 3. i've copyed my generated apiKey.

const apiKey = '3ZZ2FpBN84tQHu4867GfN4jRDL9K5VSf';

// working with the API 'random' endpoint, and passing my apiKey to obtain answer.
const httpCall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// printing the obtained object response.
httpCall.then( (resp) => {

    // this will print a locked readable stream which means that info is hidden.
    console.log( resp );
})
.catch( console.warn ); 


// ************************************************
// creating another call function called httpCall2.

const httpCall2 = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

httpCall2.then( resp => {

    // json() method returns a promise, that's why we use 'then' to obtain the data.
    resp.json().then( data => {
        console.log(data);
    })
})
.catch( console.warn );


// ************************************************
// creating another call function called httpCall3.

const httpCall3 = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// here we're handling chained promises !, and compared to the previous code,
// this is a comfortable code, with a better understanding structure.
//
// the first 'then' will return a promise, that is handled by the second 'then'.
// it's not neccesary to have multiple catchs because that one will catch everything.
//
// finally we use object destructuring for 'url' key, and create a new image element to be
// appended in the HTML's body.
httpCall3
    .then( resp => resp.json() )
    .then( ( {data} ) => {
        const { url } = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    })
    .catch( console.warn );