<img src="https://raw.githubusercontent.com/rexxars/react-hexagon/master/logo/react-hexagon.png"
     alt="React icon"
     width=150px />
# React-JS (nov.09.2020)

#### Scope of this section.  

- Understanding all the files created by command 'npx create-react-app AppName'.

- creating a new html tag with a greeting msg inside the greeting 'variable'.

- using ReactDOM to render the variable with the html TAG, into the div inside the HTML with the Root ID.

- creating a component called 'FirstApp', and rendering it on 'index.html > divRoot' with ReactDOM.

- creating a 2nd component 'SecondApp' that returns 2 elements h1 and p, wrapped into a DIV element.

- creating a 3rd component 'ThirdApp' that returns 2 elements h1 and p, without DIV wrapping 
  (importing 'Fragment' module from React Modules ).

- creating a 4th component 'FourthApp' that returns 2 elements h1 and p, without need to import 'Fragment'
  React Module ! ( cool ).

<img src="https://github.com/ronniebm/React-JS/blob/main/03-counter-app/src/img/img01.png"
     alt="Screenshot of my first component !"
     width=1200px />

---  

- creating 'App5' and passing values using 'props' in a traditional way.
  -- also we have created a 'Default Message' just in case that prop hasn't
     beign passed by the programmer.<br><br>

     <b>*IMPORTANT*</b>: we're destructuring 'props' object ! of course we must know which
                property name should be taken from within, this case is 'greeting'.


- creating 'App6', here we use an IF condition to check if greeting 'prop' was given
  by the programmer, and if NOT we create a new personalized ERROR to advice the
  programmer than that 'props' is required (this is not the best practice).


- creating 'App7', here we use propTypes as a separated block validator, please notice 
  we're not using IF block to check every given prop, and it's very friendly b'cause
  i can specify the type and if REQUIRED (or not) in a very comfortable syntax.  


- creating 'App8', here we use propTypes 'defaultProps' as a separated block to define 
  default 'props' values, i can do this with a very comfortable syntax.

- creating 'CounterApp' component, it works with 'useState' HOOK, and has 3 buttons working with 'onClick' event, to ADD, RESET, SUBSTRACT from the actual value, this is the screenshot of the rendered component and the component's browser monitor:

<img src="https://github.com/ronniebm/React-JS/blob/main/03-counter-app/src/img/img02.png"
     alt="my CounterApp component !"
     width=800px />


# FILES of this practice:  

#### file: [index.js](https://github.com/ronniebm/React-JS/blob/main/03-counter-app/src/index.js)  
This is the start point of React, you can find the main code documented.  

#### file: [FirstApp.js](https://github.com/ronniebm/React-JS/blob/main/03-counter-app/src/FirstApp.js)  
This is the component coded, you can find IMPORTANT NOTES to take into account, and usefull code comments (tips).  

#### file: [CounterApp.js](https://github.com/ronniebm/React-JS/blob/main/03-counter-app/src/CounterApp.js)  
This is a Homework i must complete, creating a NewComponent called 'CounterApp' and following same structure as i did in FirstApp.js file.