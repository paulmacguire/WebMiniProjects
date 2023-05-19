const fs = require('fs');

const rotacion = parseInt(process.argv[2]);
const rutaArchivo = process.argv[3] ;
const nombreArchivo = process.argv[4];

fs.readFile(rutaArchivo + nombreArchivo, 'utf8', (err, data) => {
  if (err) throw err;

  let contenidoCifrado = '';
  for (let i = 0; i < data.length; i++) {
    const letra = data[i];
    const esLetra = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]$/.test(letra);
    if (esLetra) {
      let nuevaLetra = String.fromCharCode(letra.charCodeAt(0) + rotacion);
      if (nuevaLetra > 'z' || (nuevaLetra > 'Z' && nuevaLetra < 'a')) {
        nuevaLetra = String.fromCharCode(nuevaLetra.charCodeAt(0) - 26);
      }
      contenidoCifrado += nuevaLetra;
    } else {
      contenidoCifrado += letra;
    }
  }

  const nuevoNombreArchivo = nombreArchivo.replace(/\.[^/.]+$/, '') + ' cifrado.txt';
  fs.writeFile(rutaArchivo + nuevoNombreArchivo, contenidoCifrado, (err) => {
    if (err) throw err;
    console.log('El archivo ha sido cifrado con éxito.');
  });
});


// El comando que se tiene que correr es el siguiente:
// node index.js <numero_rotacion> ./ <nombre_archivo>
