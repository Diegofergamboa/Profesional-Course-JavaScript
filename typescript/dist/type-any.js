// Tipo explicito
let idUser;
idUser = 1; //number
idUser = '1'; //string
console.log(idUser);
// El valor de any va a permitir que pueda tomar cualquier valor la variable
// Tipo inferido
let otherId; // Va intrinseco el valor de any
otherId = 1;
otherId = '1';
console.log('otherId', otherId);
let surprise = 'hola TypeScript';
// 
const res = surprise.substring(6); // Accediendo a la cadena restante que solo contiene typescript.
console.log('restante', res); // Esto podría generar error porque any puede dar problemas en el momento de correr o de compilar.
// Se usa solamente cuando no se sabe el valor de la variable en cuestión o el tipo de dato que la variable va a contener.
