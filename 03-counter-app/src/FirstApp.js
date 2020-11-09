// Here you can find my personal notes:
// ************************************
// is part of React Standard that every new component,
// should be named with upper camel case !, that's why
// this component has been named 'FirstApp.js'.

// i must not forget import React b'cause i'm using JSx syntax !!!


// In React there are two types of components, one is based
// on a class, and other is based on functions !.
// --- this functions were named 'Stateless Functional Components' (SFC) 
// --- nowadays they're called 'Functional Components' (FC) thanks to
//     introductions of Hooks in React, so class based components are not 
//     been used.

import React from 'react';

// according to mentioned before, this is our first FC (Functional Component):
const FirstApp = () => {

    return <h1>Ronnie, this is a Hello world component !</h1>;

}

// exporting by default this component.
export default FirstApp;