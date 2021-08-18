import React from 'react';
import Result from './components/Result';
import './App.css';

const App = () => {
  console.log("Renderización de la App");
  return (
    <main className="react-calculator">
      <Result />
      <div className="numbers">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
      </div>
      <div className="functions">
        <button>clear</button>
        <button>r</button>
      </div>
      <div className="math-operations">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
      </div>
    </main>
  );
}

export default App;
