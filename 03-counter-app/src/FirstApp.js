// Here you can find my personal notes:
// ************************************
// is part of React Standard that every new component,
// should be named with upper camel case !, that's why
// this component has been named 'FirstApp.js'.

// i must not forget to import React b'cause i'm using JSx syntax !!!


// In React there are two types of components, those who are based
// on a class, and those who are based on functions !.
// --- the class based components were also named 'Stateless Functional Components' (SFC). 
// --- nowadays they have changed thanks to Introduction of React Hooks and they're called
//     now 'Functional Components' (FC), so class based components are not been used.

import React from 'react';

// according to mentioned before, this is our first FC (Functional Component):
const FirstApp = () => {

    return <h1>Ronnie, this is a Hello world component !</h1>;

}

// exporting by default this component.
export default FirstApp;