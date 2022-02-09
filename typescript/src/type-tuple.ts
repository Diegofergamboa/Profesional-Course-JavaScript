export {} //Para eliminar el error de que la variable user ya existe.

let user: [number, string]; // Guardaría un valor como un 1 = 'nombre'
user = [1, 'nombre'];
console.log(user);
// Notación de corchetes.
console.log('user name ', user[1]);
console.log('user id ', user[0]);

// Tuplas con varios valores.

let userInfo: [number, string, boolean];
userInfo = [
    2,
    'Diego',
    true,
]
console.log('user information ' + userInfo)

// Arreglo de tuplas.

let array: [number, string][] = []; //Aqui vamos a tener un conjunto de tuplas.
array.push([1, 'firstUsername']);
array.push([2, 'secondUsername']);
array.push([3, 'thirdUsername']);
console.log('array ' + array);

// Funcione de tipo array.

array[2][1] = 'thirdUsernameMofied';
console.log('array ' + array);
