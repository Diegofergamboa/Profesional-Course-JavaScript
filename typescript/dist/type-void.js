// El tipo de valor void en typescript por lo general es lo opuesto de any, es "ausencia de valor". 
// Se suele usar como retorno de una función y con retorno de una variable.
//Void.
//Tipo explicito
function showFunction(user) {
    // El tipo de dato lo da como void porque no detecta el tipo de valor que se tiene.
    console.log('Userinfo', user.id, user.username, user.firstName);
    return 'hola'; // Aqui va a mostrar que el tipo de dato va a ser string.
}
showFunction({
    id: 1,
    username: 'Diego',
    firstName: 'Fernando'
});
// Tipo inferido.
function showFormattedInfo(user) {
    console.log('User info', `
        id: ${user.id} ,
        username: ${user.username} ,
        firstName: ${user.firstName}
    `);
}
showFormattedInfo({
    id: 1,
    username: 'Diego',
    firstName: 'Fernando'
});
//Void como tipo de variable,
let unusuable;
unusuable = null;
unusuable = undefined;
