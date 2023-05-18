import React, { useState } from 'react';
import './Numbers.css';
import { performSum } from './handleResult.js';
import { performMultiply } from './handleResult.js';
import { performSubtraction } from './handleResult.js';
import { performDivision } from './handleResult.js';

export default function Numbers() {
  const [panelValue, setPanelValue] = useState('');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null)
  const [buttonPressed, setButtonPressed] = useState(false);


  const handleAC = () => {
    setOperator(null); // Borrar el operador
    setPanelValue(''); // Borrar todo el contenido del panel
    setPreviousValue(null); // Borrar el valor anterior
  };

  const handleDEL = () => {
    setPanelValue(panelValue.slice(0, -1)); // Eliminar el último carácter del panel
    
    if (panelValue === operator) {
      setOperator(null);
      setPanelValue('');

    }
  };

    // +numero ó -numero, ó +numero++numero ó -numero--numero, etc
  if ((operator === '-' || operator === '+') && (panelValue === '')) {
    setPanelValue(operator + panelValue);
    // setOperator(null);

  // *número ó /número ó *número**número ó /número//número, etc  
  } else if ((operator === 'times') && ((panelValue === '') || (panelValue === null)) && ((previousValue === '') || (previousValue === null))) {
    setPanelValue('');
    setOperator(null);
    console.log("Operación Invalida de multiplicación");

  } else if ((operator === 'divide') && (panelValue === '') && (previousValue === '')) {
    setPanelValue('');
    setOperator(null);
    console.log("Operación Invalida de división");
  } 




  const handleNumberClick = (number) => {
    // Verificar que el número no contenga más de un punto decimal
    console.log("number:", number);
    console.log("panelValue contiene PUNTO?", number === '.');
    if ((number === '.') && !(panelValue.includes('.'))) {
      console.log("entrando a if");
      setPanelValue(panelValue + number); // No hacer nada si ya hay un punto decimal en el número
    }
  };

  console.log("panelValue:", panelValue);
  console.log("operator:", operator);
  console.log("previousValue:", previousValue);


  return (
    <>
    <div className='container-main'>
        <div className='container'>
            <form>
              <input type="text" value={panelValue} readOnly />
            </form>
        

            <div id="calculatorButtons" className="keypad">
                <button id='clear' className='other-operations' onClick={handleAC}>
                  <p>AC</p>
                </button>
                <button className='other-operations' onClick={handleDEL}>
                  <p>DEL</p>
                </button>
                <button
                  className='operations'
                  onClick={() => {
                    setOperator('divide');
                    setPreviousValue(panelValue);
                    setPanelValue('');
                  }}
                >
                  <p>&divide;</p>
                </button>
                <button onClick={() => setPanelValue(panelValue + '7')}><p>7</p></button>
                <button onClick={() => setPanelValue(panelValue + '8')}><p>8</p></button>
                <button onClick={() => setPanelValue(panelValue + '9')}><p>9</p></button>
                <button
                  className='operations'
                  onClick={() => {
                    setOperator('times');
                    setPreviousValue(panelValue);
                    setPanelValue('');
                  }}
                >
                  <p>&times;</p>
                </button>
                <button onClick={() => setPanelValue(panelValue + '4')}><p>4</p></button>
                <button onClick={() => setPanelValue(panelValue + '5')}><p>5</p></button>
                <button onClick={() => setPanelValue(panelValue + '6')}><p>6</p></button>
                <button
                  className='operations'
                  onClick={() => {
                    setOperator('-');
                    setPreviousValue(panelValue);
                    setPanelValue('');
                  }}
                >
                  <p>-</p>
                </button>
                <button onClick={() => setPanelValue(panelValue + '1')}><p>1</p></button>
                <button onClick={() => setPanelValue(panelValue + '2')}><p>2</p></button>
                <button onClick={() => setPanelValue(panelValue + '3')}><p>3</p></button>
                <button
                  className='operations'
                  onClick={() => {
                    setOperator('+');
                    setPreviousValue(panelValue);
                    setPanelValue('');
                  }}
                >
                  <p>+</p>
                </button>
                <button id='zero' onClick={() => setPanelValue(panelValue + '0')}><p>0</p></button>
                <button onClick={() => {
                  handleNumberClick('.');
              }}><p>.</p></button>
                <button
                  id='equal'
                  className='operations'
                  onClick={() => {

                    if (operator === 'times') {
                      performMultiply(previousValue, panelValue)
                        .then(timesResult => {
                          setPanelValue(timesResult);
                          setOperator(null);
                          setPreviousValue(timesResult);
                        })
                        .catch(error => {
                          console.error('Error:', error);
                          // Manejar el error aquí si es necesario
                        });
                    } else if (operator === 'divide') {
                      performDivision(previousValue, panelValue)
                        .then(divisionResult => {
                          setPanelValue(divisionResult);
                          setOperator(null);
                          setPreviousValue(divisionResult);
                        })
                        .catch(error => {
                          console.error('Error:', error);
                          // Manejar el error aquí si es necesario
                        });
                    }  else if (operator === '-') {
                      performSubtraction(previousValue, panelValue)
                        .then(substractionResult => {
                          setPanelValue(substractionResult);
                          setOperator(null);
                          setPreviousValue(substractionResult);
                        })
                        .catch(error => {
                          console.error('Error:', error);
                          // Manejar el error aquí si es necesario
                        });
                    } else if (operator === '+') {
                      performSum(previousValue, panelValue)
                        .then(sumResult => {
                          setPanelValue(sumResult);
                          setOperator(null);
                          setPreviousValue(sumResult);
                        })
                        .catch(error => {
                          console.error('Error:', error);
                          // Manejar el error aquí si es necesario
                        });
                    } else {
                      console.log("Operación Invalida");
                    }

                    // setOperator('=');
                    // setPreviousValue(panelValue);
                    // setPanelValue('');
                  }}
                >
                  <p>=</p>
                </button>

            </div>
        </div>
    </div>
        
    </>
  );
}
