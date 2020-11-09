// importing React to be able of working with JSx code syntax.
// importing ReactDOM to be able of manipulating objects in the DOM.
import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp';

// applying some style to my first component :D
import './index.css';


// creating a pointer to DIV inside public/index.html with the id = 'app'.
const divRoot = document.querySelector('#app');

// rendering the new greeting variable into the divRoot asigned object.
ReactDOM.render(<FirstApp/>, divRoot);