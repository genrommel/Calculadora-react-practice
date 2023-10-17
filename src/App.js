import './App.css';
import coyoteLogo from './images/coyote.png';
import Button from './components/button.jsx';
import Screen from './components/screen.jsx';
import ButtonClear from './components/buttonClear.jsx';
import Logo from './components/logo.jsx'
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input,setInput] = useState('');

  const addInput = val => {
    setInput(input + val)
  };

  const clearInput = () => {
    setInput('');
  }

  const getResult = () => {
    const regex = /[+\-*/]/;
  const regex2 = /[\+\-\*/]{2,}/g;
    if (regex.test(input) && !regex2.test(input)){
      setInput(evaluate(input))
    }else{
      alert('Ingrese valores válidos para realizar calculos');
      clearInput();
    }
    
  }

  return (
    <div className='App'>
      <Logo/>
      <div className='calculadora-contenedor'>
        <Screen input={input}/>
        <div className='fila'>
          <Button manejarClic={addInput}>1</Button>
          <Button manejarClic={addInput}>2</Button>
          <Button manejarClic={addInput}>3</Button>
          <Button manejarClic={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={addInput}>4</Button>
          <Button manejarClic={addInput}>5</Button>
          <Button manejarClic={addInput}>6</Button>
          <Button manejarClic={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={addInput}>7</Button>
          <Button manejarClic={addInput}>8</Button>
          <Button manejarClic={addInput}>9</Button>
          <Button manejarClic={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={getResult}>=</Button>
          <Button manejarClic={addInput}>0</Button>
          <Button manejarClic={addInput}>.</Button>
          <Button manejarClic={addInput}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear manejarClic={clearInput}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

