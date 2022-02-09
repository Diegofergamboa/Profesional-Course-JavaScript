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

