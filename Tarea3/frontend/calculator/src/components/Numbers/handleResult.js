// operations.js



// Gran parte de estas funciones fueron realizadas mediante ChatGPT, sin embargo
// se realizaron modificaciones para que se ajustaran a las necesidades de la tarea,
// ya que tiraba igual varios errores el código que se generaba en ChatGPT.

// Función para realizar la operación de suma utilizando GET
export const performSum = async (num1, num2) => {
  if (num1.includes("+")) {
    num1 = num1.replace("+", "");
  }

  if (num2.includes("+")) {
    num2 = num2.replace("+", "");
  }

  console.log(num1, num2);

  try {
    const response = await fetch(`http://localhost:4000/adding/${num1}/${num2}`);

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();

    console.log(data.result.toString());

    return data.result.toString();
  } catch (error) {
    console.error('Error:', error);
    // Manejar el error aquí si es necesario
  }
};


export const performMultiply = async (num1, num2) => {
  

  if (num1.includes("+")) {
    num1 = num1.replace("+", "");
  }

  if (num2.includes("+")) {
    num2 = num2.replace("+", "");
  }

  try {
    const response = await fetch(`http://localhost:4000/times/${num1}/${num2}`);

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();

    console.log(data.result.toString());

    return data.result.toString();
  } catch (error) {
    console.error('Error:', error);
    // Manejar el error aquí si es necesario
  }
};



// Función para realizar la operación de resta utilizando POST
export const performSubtraction = async (num1, num2) => {
  if (num1.includes("+")) {
    num1 = num1.replace("+", "");
  }

  if (num2.includes("+")) {
    num2 = num2.replace("+", "");
  }

  if (num1.includes("-")) {
    num1 = num1.replace("-", "");
  }

  if (num2.includes("-")) {
    num2 = num2.replace("-", "");
  }
  

  try {
    const response = await fetch('http://localhost:4000/substraction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        num1: num1,
        num2: num2
      })
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();

    const result = data.result.toString();
    console.log(result);

    return Promise.resolve(result);
  } catch (error) {
    console.error('Error:', error);
    // Manejar el error aquí si es necesario
  }
};



// // Función para realizar la operación de división utilizando POST
export const performDivision = async (num1, num2) => {
  if (num1.includes("+")) {
    num1 = num1.replace("+", "");
  }

  if (num2.includes("+")) {
    num2 = num2.replace("+", "");
  }


  try {
    const response = await fetch('http://localhost:4000/division', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        num1: num1,
        num2: num2
      })
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();

    const result = data.result.toString();
    console.log(result);

    return Promise.resolve(result);
  } catch (error) {
    console.error('Error:', error);
    // Manejar el error aquí si es necesario
  }
};