// importing my first Hook: useState (in functional components)
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// we set 'value' with a default of '10', but the true value,
// is passed from 'index.js' file when calling the CounterApp
// with the xml TAG.
const CounterApp = ( {value = 10} ) => {

    const [ counter, setCounter ] = useState( value );

    // handleAdd: This is my incremental method.
    const handleAdd = () => {
        setCounter( (c) => c + 1);
    }

    // handleReset: This is my reset method.
    const handleReset = () => {
        setCounter( value );
    }
    
    // handleSubstract: This is my substract method.
    const handleSubstract = () => {
        setCounter( (c) => c - 1);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }> + 1 </button>
            <button onClick={ handleReset }> Reset </button>
            <button onClick={ handleSubstract }> - 1 </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

// exporting by defaul 'CounterApp' component.
export default CounterApp;