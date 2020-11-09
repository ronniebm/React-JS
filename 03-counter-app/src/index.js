// importing React to be able of working with JSx code syntax.
// importing ReactDOM to be able of manipulating objects in the DOM.
import React from 'react';
import ReactDOM from 'react-dom';

// creating a new greeting 'cons' variable, saving a HTML Tag structure.
const greeting = <h1>Hello world !</h1>;

// creating a pointer to DIV inside public/index.html with the id = 'app'.
const divRoot = document.querySelector('#app');

// rendering the new greeting variable into the divRoot asigned object.
ReactDOM.render(greeting, divRoot); 