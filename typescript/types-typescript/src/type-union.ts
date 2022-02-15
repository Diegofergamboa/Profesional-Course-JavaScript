// 1, '1'.
export {};

// let idUser: number | string ; // nos va a recibir los dos tipos de datos sin ningún problema.
// idUser = 10;
// idUser = '10'

// // Buscar username dado un ID.

// function getUsernamebyId(id: number | string) {
//     // Lógica de negocio,
//     return 'diegofergamboa';
// }

// getUsernamebyId(20);
// getUsernamebyId('cadena con id del user');

// alias de tipos: TS
// Estableciendo alias, siendo Id user la union entre number y string.
type IdUser = number | string ;
type Username = string;
let idUser: IdUser ; // Escribiendo el tipo de dato.
idUser = 10;
idUser = '10'

// Buscar username dado un ID.

function getUsernamebyId(id: IdUser): Username {
    // Lógica de negocio,
    return 'diegofergamboa';
}

getUsernamebyId(20);
getUsernamebyId('cadena con id del user');

// Tipos literales.
// Conjunto de reglas que solo admitan ciertos parámetros específicos

type SquareSize = '100x100' | '500x500' | '1000x1000' ;   //Referencia a los valores cuadrados para fotografía

let smallPicture: SquareSize = '100x100'; // El editor solo me permite asignar los valores asignados anteriormente.

let mediumPicture: SquareSize = '500x500';
let bigPicture: SquareSize = '1000x1000';
