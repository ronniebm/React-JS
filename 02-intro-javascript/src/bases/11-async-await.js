// Async and Await.

// This will be the most simplified promise structure, using resolve only.
const getPromiseImage = () => new Promise ( resolve => resolve('https://fafadfafatqf.com') );

// printing the promise succes return.
getPromiseImage().then( console.log );

// using async with an arrow function to return a promise.
const getImage = async() => {
    return 'https://fafadfafatqf.com';
}

getImage().then( console.log );



// The only condition to use 'await' is that must be inside an async function.
// for error handling with an 'async' function, we must use try and catch.
const getImage2 = async() => {

    try {
        const apiKey = '3ZZ2FpBN84tQHu4867GfN4jRDL9K5VSf';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        
        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // error handling
        console.error(error);
    }

    
    
}

getImage2();