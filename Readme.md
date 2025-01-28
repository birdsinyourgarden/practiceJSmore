## Ejercicio 1: Manejo de Promesas

Crea una función fetchData(url) que devuelva una promesa que obtenga datos de una URL usando fetch. Si la solicitud falla, la promesa debe manejar el error con un mensaje personalizado, indicando que hubo un problema.

### Ejemplo de uso:
fetchData('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(error => console.log("Solicitud fallida:", error.message));

## Ejercicio 2: Async/Await con Fetch

Escribe una función getUserData() que use async/await para obtener datos de la API https://jsonplaceholder.typicode.com/users. Usa un bloque try-catch para manejar errores en la solicitud.

### Llamada a la función
getUserData();

## Ejercicio 3: Usando Axios

Usa la librería axios para realizar una solicitud GET a la URL https://jsonplaceholder.typicode.com/posts. Procesa los datos obtenidos e imprime en consola el título del primer post.


## Ejercicio 4: Error Handling Avanzado

Crea una función parseJSON que intente convertir una cadena JSON con JSON.parse. Si ocurre un error, captura la excepción y devuelve un mensaje indicando que el JSON es inválido.

### Ejemplo de uso
const jsonString = '{"name": "Juan"}';
const result = parseJSON(jsonString);
console.log(result);

## Ejercicio 5: Manejo de Timeouts con Promesas

Crea una función delay(ms) que devuelva una promesa que se resuelva después de ms milisegundos. Úsala para retrasar la ejecución de un mensaje en consola.

### Ejemplo de uso
delay(2000).then(() => console.log("Este mensaje aparece después de 2 segundos"));

## Ejercicio 6: Encadenamiento de Promesas

Simula la preparación de un café con tres pasos: hervirAgua, molerCafe, y hacerCafe. Cada paso debe devolver una promesa que se resuelva tras cierto tiempo.


## Ejercicio 7: Operadores Rest y Spread

Crea una función que acepte un número indefinido de argumentos usando el operador rest y devuelva la suma de todos ellos.

### Ejemplo de uso
console.log(sumarTodos(1, 2, 3, 4, 5)); // Resultado: 15

## Ejercicio 8: Uso de Map y Set

Escribe una función que reciba un array de números, elimine los duplicados usando Set, y devuelva un array con los valores únicos ordenados de menor a mayor.

### Ejemplo de uso
console.log(eliminarDuplicadosYOrdenar([5, 3, 8, 3, 1, 5])); // Resultado: [1, 3, 5, 8]

### Ejercicio 9: Manipulación de DOM con Eventos

Crea una página con un botón que, al ser presionado, realice una solicitud fetch a una API pública y muestre los datos en el DOM.

### Ejercicio 10: Proxy para Validaciones

Crea un proxy para validar un objeto. Por ejemplo, asegúrate de que las propiedades del objeto persona tengan valores válidos (edad debe ser mayor a 0, nombre no puede estar vacío).

### Ejemplo de uso
persona.nombre = 'Juan'; // Correcto
persona.edad = 25;       // Correcto
console.log(persona);
// persona.edad = -5;     // Error

## Ejercicio 11: Fetch con Headers Personalizados

Usa fetch para hacer una solicitud POST a una API simulada. Envía un cuerpo en formato JSON y configura un header Content-Type como application/json.

### Llamada a la función
enviarDatos();

