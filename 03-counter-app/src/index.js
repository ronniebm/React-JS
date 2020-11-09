// importing React to be able of working with JSx code syntax.
// importing ReactDOM to be able of manipulating objects in the DOM.
// importing the 'FirstApp' component.
import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp, { SecondApp, ThirdApp, FourthApp } from './FirstApp';

// applying some style to my first component :D
// importing the index.css file.
import './index.css';


// creating a pointer to DIV inside public/index.html with the id = 'app'.
const divRoot = document.querySelector('#app');

// rendering the 'FirstApp' and 'SecondApp' component into the divRoot asigned object.
ReactDOM.render([<FirstApp/>, <SecondApp/>, <ThirdApp/>, <FourthApp/>], divRoot);
