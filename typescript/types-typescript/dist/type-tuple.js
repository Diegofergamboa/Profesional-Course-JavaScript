"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user; // Guardaría un valor como un 1 = 'nombre'
user = [1, 'nombre'];
console.log(user);
// Notación de corchetes.
console.log('user name ', user[1]);
console.log('user id ', user[0]);
// Tuplas con varios valores.
let userInfo;
userInfo = [
    2,
    'Diego',
    true,
];
console.log('user information ' + userInfo);
// Arreglo de tuplas.
let array = []; //Aqui vamos a tener un conjunto de tuplas.
array.push([1, 'firstUsername']);
array.push([2, 'secondUsername']);
array.push([3, 'thirdUsername']);
console.log('array ' + array);
// Funcione de tipo array.
array[2][1] = 'thirdUsernameMofied';
console.log('array ' + array);
