- Instrucciones de uso


Ejecutar el programa desde la línea de comandos con tres argumentos:
 - El número de posiciones que se desea rotar en el cifrado.
 - La ruta donde se encuentra el archivo a cifrar.
 - El nombre del archivo a cifrar.

El archivo cifrado se guardará en la misma ubicación del archivo original, con el nombre texto cifrado.txt.

Detalles de implementación
 - El programa utiliza la librería fs de Node.js para leer y escribir archivos. El cifrado se realiza mediante un bucle que recorre el contenido del archivo original letra por letra. El archivo cifrado se guarda con un nombre distinto al archivo original, reemplazando la extensión del archivo por "cifrado.txt".

// El comando que se tiene que correr es el siguiente:
// node index.js <numero_rotacion> ./ <nombre_archivo>

// Cabe destacar que se tiene que estar en la carpeta Desafio2 utilizando cd Desafio2/ 
