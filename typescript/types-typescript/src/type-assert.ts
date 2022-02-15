// <> // Angle bracket syntax
export = {};

let username: any;
username = 'diego';

// tenemos una cadena, TS confia en mi! :D

let message: string = (<string>username).length > 5 ? `Welcome ${username}`:
    `Username is too short`;

console.log(message);


let usernameWithId: any = 'diegofergamboa 1';

username = (<string>usernameWithId).substring(0,10);
console.log('only username ' + username);



//Sintaxis as

message = (username as string).length > 5 ? `Welcome ${username}`:
    `Username is too short`;

let helloUser: any;
helloUser = 'hello diegofergamboa';
username = (helloUser as string).substring(6);
console.log(username);