// Arreglo para contener un conjunto de valores.

//Corchetes [].

//Tipo explicito.

let users: string[]; // Así se inicializa.

users = ['paparazzi', 'letskin', 'sourcescoder'];
// users = [1, true, 'stayers']; // Error por que no se puede asignar más que solo variables.

let otherUsers = ['paparazzi', 'letskin', 'sourcescoder'];


//Array <TIPO>.
let picturesTitles: Array<string>; //le decimos que slo va a contener cadenas de texto.

picturesTitles = ['Favorites', 'LandScape'];

//Accediendo a los valores en un array.
console.log(picturesTitles[0]);

// Propiedades en array.

console.log('Size of the array is: '+ users.length);


// Funciones para con arrays.
users.push('aPlatziUser');
users.sort();
console.log('users modificados', + users);