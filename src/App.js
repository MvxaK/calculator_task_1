import logo from './logo.svg';
import './App.css';
import React, {useState, createElement} from 'react';


function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  function handleClick(value) {
    setInput((prev) => prev + value);
  }

  function calculate(operation) {
    if (input === '') 
      return;
    const num = Number(input);
    switch (operation) {
      case 'sum':
        setResult((prev) => prev + num);
        setInput('');
        break;
      case 'minus':
        setResult((prev) => prev - num);
        setInput('');
        break;
      case 'multiplication':
        setResult((prev) => prev * num);
        setInput('');
        break;
      case 'divide':
        setResult((prev) => prev / num);
        setInput('');
        break;
    }
  }

  function DeleteInput(){
    setInput('');
  }

  function DeleteResult() {
    setResult(0);
  }

  const buttons = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, 'Delete input', 'Delete result', '/'].map((button, index) => 
    React.createElement('button', {
      key: index,
      onClick : () =>{
        if(typeof button === 'number') handleClick(button);
        else if(button === 'Delete input') DeleteInput();
        else if(button === 'Delete result') DeleteResult();
        else if(button === '+') calculate('sum');
        else if(button === '-') calculate('minus');
        else if(button === '*') calculate('multiplication');
        else calculate('divide');
      }
    }, button)
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Result: {result}</p>
        <p>Input: {input}</p>
        <div className="calculator">
          {buttons}
        </div>

      </header>
    </div>
  );
}

export default App;
