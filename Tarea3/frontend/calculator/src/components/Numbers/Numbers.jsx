import React, { useState , useEffect} from 'react';
import './Numbers.css';
import { performDivision, performMultiply, performSubtraction, performSum } from './handleResult.js';

export default function Numbers() {
  const [panelValue, setPanelValue] = useState('');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null)
  const [equalResult, setEqualResult] = useState(false);
  

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const equalButton = document.getElementById('equal');
        equalButton.click();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleAC = () => {
    setOperator(null); // Borrar el operador
    setPanelValue(''); // Borrar todo el contenido del panel
    setPreviousValue(null); // Borrar el valor anterior
  };

  const handleDEL = () => {
    if (panelValue == "ERROR"){
      setPanelValue(panelValue.slice(0, -1)); // Eliminar el último carácter del panel
    
      if (panelValue === operator) {
        setOperator(null);
        setPanelValue('');
  
      }
    }

  };

  const handleKeyDown = (event) => {
    console.log("event.key:", event.key)
    if (event.key === "Enter") {
      event.preventDefault();
      const equalButton = document.getElementById("equal");
      equalButton.click();
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


  // Este componente se reutilizó de la entrega del proyecto. También se fue
  // debuggeando con ChatGPT y Github Copilot. 
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
                <button onClick={() => {if (operator !== "=") {
                  setPanelValue(panelValue + '5')
                } else if (operator === "=") {
                  setPanelValue("")
                  setOperator(null)
                  setPreviousValue(null)
                }
                }}><p>5</p></button>
                <button onClick={() => {if (operator !== "=") {
                  setPanelValue(panelValue + '6')
                } else if (operator === "=") {
                  setPanelValue("")
                  setOperator(null)
                  setPreviousValue(null)
                }
                }}><p>6</p></button>
                <button onClick={() => {if (operator !== "=") {
                  setPanelValue(panelValue + '9')
                } else if (operator === "=") {
                  setPanelValue("")
                  setOperator(null)
                  setPreviousValue(null)
                }
                }}><p>9</p></button>
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
                <button onClick={() => {if (operator !== "=") {
                  setPanelValue(panelValue + '4')
                } else if (operator === "=") {
                  setPanelValue("")
                  setOperator(null)
                  setPreviousValue(null)
                }
                }}><p>4</p></button>
                <button onClick={() => {if (operator !== "=") {
                  setPanelValue(panelValue + '5')
                } else if (operator === "=") {
                  setPanelValue("")
                  setOperator(null)
                  setPreviousValue(null)
                }
                }}><p>5</p></button>
                <button onClick={() => {if (operator !== "=") {
                  setPanelValue(panelValue + '6')
                } else if (operator === "=") {
                  setPanelValue("")
                  setOperator(null)
                  setPreviousValue(null)
                }
                }}><p>6</p></button>
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
                <button onClick={() => {if (operator !== "=") {
                  setPanelValue(panelValue + '1')
                } else if (operator === "=") {
                  setPanelValue("")
                  setOperator(null)
                  setPreviousValue(null)
                }
                }}><p>1</p></button>
                <button onClick={() => {if (operator !== "=") {
                  setPanelValue(panelValue + '2')
                } else if (operator === "=") {
                  setPanelValue("")
                  setOperator(null)
                  setPreviousValue(null)
                }
                }}><p>2</p></button>
                <button onClick={() => {if (operator !== "=") {
                  setPanelValue(panelValue + '3')
                } else if (operator === "=") {
                  setPanelValue("")
                  setOperator(null)
                  setPreviousValue(null)
                }
                }}><p>3</p></button>
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
                <button id="zero" onClick={() => {if (operator !== "=" ) {
                  setPanelValue(panelValue + '0')
                } else if (operator === "=") {
                  setPanelValue("")
                  setOperator(null)
                  setPreviousValue(null)
                }
                }}><p>0</p></button>
                <button onClick={() => {if (operator !== "=") {
                  handleNumberClick('.')
                } else if (operator === "=") {
                  setPanelValue("")
                  setOperator(null)
                  setPreviousValue(null)
                }
                }}><p>.</p></button>
                <button
                  id='equal'
                  className='operations'
                  onClick={() => {

                    if (operator === 'times' && panelValue !== '') {
                      performMultiply(previousValue, panelValue)
                        .then(timesResult => {
                          setPanelValue(timesResult);
                          // setOperator(null);
                          setPreviousValue(null);
                        })
                        .catch(error => {
                          console.error('Error:', error);
                          // Manejar el error aquí si es necesario
                        });
                    } else if (operator === 'divide' && panelValue !== '') {
                      performDivision(previousValue, panelValue)
                        .then(divisionResult => {
                          setPanelValue(divisionResult);
                          // setOperator(null);
                          setPreviousValue(null);
                        })
                        .catch(error => {
                          console.error('Error:', error);
                          // Manejar el error aquí si es necesario
                        });
                    }  else if (operator === '-' && panelValue !== '') {
                      performSubtraction(previousValue, panelValue)
                        .then(substractionResult => {
                          setPanelValue(substractionResult);
                          // setOperator(null);
                          setPreviousValue(null);
                        })
                        .catch(error => {
                          console.error('Error:', error);
                          // Manejar el error aquí si es necesario
                        });
                    } else if (operator === '+' && panelValue !== '') {
                      performSum(previousValue, panelValue)
                        .then(sumResult => {
                          setPanelValue(sumResult);
                          // setOperator(null);
                          setPreviousValue(null);
                        })
                        .catch(error => {
                          console.error('Error:', error);
                          // Manejar el error aquí si es necesario
                        });
                    } else {
                      console.log("Operación Invalida");
                    }

                    setOperator('=');
                    setPreviousValue('');
                    setPanelValue('');
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
