"use strict";
let username;
username = 'diego';
// tenemos una cadena, TS confia en mi! :D
let message = username.length > 5 ? `Welcome ${username}` :
    `Username is too short`;
console.log(message);
let usernameWithId = 'diegofergamboa 1';
username = usernameWithId.substring(0, 10);
console.log('only username ' + username);
//Sintaxis as
message = username.length > 5 ? `Welcome ${username}` :
    `Username is too short`;
let helloUser;
helloUser = 'hello diegofergamboa';
username = helloUser.substring(6);
console.log(username);
module.exports = {};
