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

import React, { Fragment } from 'react';

// according to mentioned before, this is our first FC (Functional Component):
const FirstApp = () => {

    return <h1>Ronnie, this is a Hello world component !</h1>;

}

// creating a second component to learn how to return 2 tags, for this we must "wrap" them,
// let's do that with a DIV parent tag.
// --- the problem of doing this is that we are generating unnecessary wraping DIV's !
//     to solve that, below in the third component we will use an special tag called <FRAGMENT>.
//
// --- BUT if we really need the wraping DIV with an specific id or class, to group or styling,
//     we can make use of this syntax, it's fine.
export const SecondApp = () => {
    return  (
            <div id="component2">
                <h1> This is a second component in React !</h1>
                <p> Now i'm addind a paragraph below this second component (it's wrapped by a DIV tag).</p>
            </div>
    );
}


// this third component doesn't generate a wraping DIV, it will return the <h1> and <p> tags only !,
// and are some cases when we're gonna need this, that it's ok too.
export const ThirdApp = () => {
    return  (
            <Fragment>
                <h1> This is the third component in React !</h1>
                <p> Now i'm addind a paragraph below this third component ( without DIV Wrapping ! ).</p>
            </Fragment>
    );
}


// exporting by default this component.
export default FirstApp;